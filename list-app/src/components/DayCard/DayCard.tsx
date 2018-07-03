import * as React from 'react';

import { calculateRelativeDate } from '../../common';
import { DAYS } from '../../constants/index';
import TaskListSwitchBoard from '../../containers/TaskListSwitchBoard';
import { PrevCurNextKey, PrevCurNextTaskLists } from '../../types';

// TODO: active week
export interface Props {
  currentTime: Date;
  day: DAYS;
  activeWeek: PrevCurNextKey;
}

type ColorForWeek = {
  [week in keyof PrevCurNextTaskLists]: string
}

const colorsForWeek: ColorForWeek = {
  'prev': 'red lighten-3',
  'cur': 'green lighten-3',
  'next': 'yellow lighten-2'
}

/*
! temporarily designed to be a PURE component only display
! the day and dates of a card
*/
function DayCard({ day, currentTime, activeWeek }: Props) {
  const color = colorsForWeek[activeWeek];

  return (
    <div className={"row card-panel " + color}>
      <div className=""> {calculateRelativeDate(day, currentTime).toDateString()} </div>
      <TaskListSwitchBoard day={day} />
    </div>

  );
}

export default DayCard;
