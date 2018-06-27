import * as Debug from 'debug';
import * as React from 'react';
import { DAYS } from '../../constants';
import { PrevCurNextKey, Task } from '../../types';
import TaskItem from '../TaskItem/TaskItem';

const debug = Debug('component:TaskList');

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
function TaskList({ taskList = [], addTask }: Props) {
  // TODO: might be not very suitable to do this logic in component
  const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskList.length >= 5) {
      alert("Number of tasks is at most 5 per day")
    }
    if (!addTask) {
      throw Error("component TaskList: addTask method should exist");
      return;
    }
    const code = e.currentTarget.value;
    debug(`get ${code}, parsed code ${+code}`);
    addTask({
      code: +code
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <label> Type your tasks: </label>
        <input type="text" />
      </form>
      {
        taskList.map((item, index) =>
          <TaskItem key={index} item={item} />
        )
      }
    </div>
  );
}

export default TaskList;
