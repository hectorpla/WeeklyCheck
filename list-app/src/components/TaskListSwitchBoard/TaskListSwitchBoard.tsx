import * as React from 'react';
import { DAYS } from '../../constants';
import TaskList from '../TaskList/TaskList';
import { PrevCurNextTaskLists, PrevCurNextKey } from '../../types';

export interface Props {
  day: DAYS;
  activeWeek: PrevCurNextKey;
  taskListOfWeeks: PrevCurNextTaskLists;
  onWeekChange: (weekToActivate: PrevCurNextKey) => void;
}

// TODO: add slide feature to switch prev/cur/next week
function TaskListSwitchBoard({ day, activeWeek, taskListOfWeeks }: Props) {
  const dayTaskList = taskListOfWeeks[activeWeek];
  return (
    <div>
      <div> {activeWeek} </div>
      { 
        !!dayTaskList ?
        <TaskList day={day} week={activeWeek} 
          taskList={dayTaskList} />
        :
        <span> No data, shouldn't display </span>
      }
    </div>
  );
}

export default TaskListSwitchBoard;
