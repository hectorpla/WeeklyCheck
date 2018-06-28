import * as React from 'react';

import { calculateDate } from '../../common';
import { DAYS } from '../../constants/index';
import TaskListSwitchBoard from '../../containers/TaskListSwitchBoard';
import { PrevCurNextKey, PrevCurNextTaskLists } from '../../types';

// TODO: active week
export interface Props {
  currentTime: Date;
  day: DAYS;
  isActive: boolean;
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
* temporarily designed to be a pure component only display
* the day and dates of a card
*/
function DayCard({ day, currentTime, isActive, activeWeek }: Props) {
  const color = colorsForWeek[activeWeek];
  
  return (
    <div className={"row card-panel " + color}>
      <div className=""> {day}, {calculateDate(day, currentTime).toDateString()} </div>
      {
        isActive && 
        <TaskListSwitchBoard day={day} />
      }
    </div>

  );
}

export default DayCard;
