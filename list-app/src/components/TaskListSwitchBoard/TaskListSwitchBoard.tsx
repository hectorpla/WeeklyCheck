import * as React from 'react';
import { calculateOffsetDate, calculateRelativeDate, toMonthDateString } from '../../common';
import { DAYS } from '../../constants';
import TaskList from '../../containers/TaskList';
import { PrevCurNextKey } from '../../types';

// only day is passed from the parent 
export interface Props {
  day: DAYS;
  currentTime?: Date,
  activeWeek?: PrevCurNextKey;
  isCardActive?: boolean;
  onWeekChange?: (weekToActivate: PrevCurNextKey) => void;
}

interface WeekNeighbors {
  left: PrevCurNextKey | null
  right: PrevCurNextKey | null
}

type WeekBearing = {
  [position in PrevCurNextKey]: WeekNeighbors
}

const weekBearing: WeekBearing = {
  'prev': {
    left: null,
    right: 'cur',
  },
  'cur': {
    left: 'prev',
    right: 'next'
  },
  'next': {
    left: 'cur',
    right: null
  }
};

/*
* The component that controls the active week card for a day
*/
function TaskListSwitchBoard({ day, activeWeek = 'cur',
  isCardActive, currentTime, onWeekChange }: Props) {

  // TODO: too much logic here, split out
  const relatedCurDate = calculateRelativeDate(day, currentTime!);
  const relatedCardDate = calculateOffsetDate(relatedCurDate, activeWeek);
  const dateString = toMonthDateString(relatedCardDate);

  const leftCard = weekBearing[activeWeek].left;
  const rightCard = weekBearing[activeWeek].right;
  const handleWeekSlideLeft = () => onWeekChange!(leftCard!);
  const handleWeekSlideRight = () => onWeekChange!(rightCard!);
  return (
    // TODO: rethink, prevent propogation on the level
    <div onClick={seizeClickBubbling}>
      <div className="right"> {dateString} </div>
      { isCardActive &&
        <div>
          <button disabled={!leftCard} onClick={handleWeekSlideLeft}>
            <i className="material-icons">keyboard_arrow_left</i>
          </button>
          <button disabled={!rightCard} onClick={handleWeekSlideRight}>
            <i className="material-icons">keyboard_arrow_right</i>
          </button>
        </div>}
      <TaskList day={day} week={activeWeek}
        editable={relatedCardDate >= currentTime!} />
    </div>
  );
}

function seizeClickBubbling(e: React.MouseEvent<HTMLDivElement>) {
  e.stopPropagation();
}

export default TaskListSwitchBoard;
