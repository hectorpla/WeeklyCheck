import * as React from 'react';

import { DAYS } from '../../constants/index';
import { WEEK_DAYS } from '../../constants/index';
import TaskListSwitchBoard from '../../containers/TaskListSwitchBoard';

// TODO: active week
export interface Props {
  currentTime: Date;
  day: DAYS;
  isActive: boolean
}

/*
* temporarily designed to be a pure component only display
* the day and dates of a card
*/
function DayCard({ day, currentTime, isActive }: Props) {
  return (
    <div className="row card-panel">
      <div className=""> {day}, {calculateDate(day, currentTime).toDateString()} </div>
      <div> Tiny Content... </div>
      {
        isActive && 
        <TaskListSwitchBoard day={day} />
      }
    </div>

  );
}

export default DayCard;

function addDays(date: Date, days: number): Date {
  const newDay = new Date(date);
  newDay.setDate(newDay.getDate() + days);
  return newDay;
}

// TODO: check implentation
// TODO: Test
function calculateDate(day: DAYS, time: Date): Date {
  const dayNum = WEEK_DAYS[day] - time.getDay();
  const calculatedTime = addDays(time, dayNum);
  return calculatedTime;
}