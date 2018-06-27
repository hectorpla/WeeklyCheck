import * as React from 'react';
import { DAYS } from '../../constants';
import TaskList from '../../containers/TaskList';
import { PrevCurNextKey, PrevCurNextTaskLists } from '../../types';

// only day is passed from the parent 
export interface Props {
  day: DAYS;
  activeWeek?: PrevCurNextKey;
  taskListOfWeeks?: PrevCurNextTaskLists;
  onWeekChange?: (weekToActivate: PrevCurNextKey) => void;
}

// TODO: add slide feature to switch prev/cur/next week
// activeWeek should never be undefined
function TaskListSwitchBoard({ day, activeWeek = 'cur', taskListOfWeeks }: Props) {
  if (!taskListOfWeeks) {
    throw new Error("TaskListSwitchBoard: three lists of tasks not existing");
  }
  const dayTaskList = taskListOfWeeks[activeWeek];
  // TODO: rethink, prevent propogation on the level
  return (
    <div onClick={seizeClickBubbling}>
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

function seizeClickBubbling(e: React.MouseEvent<HTMLDivElement>) {
  e.stopPropagation();
}

export default TaskListSwitchBoard;
