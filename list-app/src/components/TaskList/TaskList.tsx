import * as React from 'react';
import { DAYS } from '../../constants';
import { PrevCurNextKey, Task } from '../../types';
import TaskItem from '../TaskItem/TaskItem';

// think again: too much information for a list?
// should the callbacks be optional?
export interface Props {
  day: DAYS;
  week: PrevCurNextKey;
  taskList: Task[];
  deleteTask?: (index: number) => void;
  addTask?: (task: Task) => void;
}

// TODO: add insert/remove feature
// 
function TaskList({ taskList = [], addTask }: Props) {
  // TODO: might be not very suitable to do this logic in component
  const handleSubmission = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (taskList.length >= 5) {
      alert("Number of tasks is at most 5 per day")
    }
    if (!addTask) {
      throw Error("component TaskList: addTask method should exist");
      return;
    }
    addTask({
      code: parseInt(e.currentTarget.value, 10)
    });
  }

  return (
    <div>
      <div> Type your tasks: </div>
      <input type="number" onSubmit={handleSubmission} />
      {
        taskList.map((item, index) =>
          <TaskItem key={index} item={item} />
        )
      }
    </div>
  );
}

export default TaskList;
