import * as Debug from 'debug';
import * as React from 'react';
import { DAYS } from '../../constants';
import { TaskInputFormWithId } from '../../forms/TaskInputForm';
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
function TaskList({ taskList = [], addTask, week, day }: Props) {
  // first do integration without type
  const submit = (values: any) => {
    debug(`form values: ${values}`);
    if (!addTask) {
      throw Error("component TaskList: addTask method should exist");
      return;
    }
    addTask({
      code: values.code
    });
  }

  // dynamically generated
  const TaskInputForm = TaskInputFormWithId(day + '-' + week, false);
  
  const isTaskFull = taskList.length === 5;
  
  return (
    <div>
      { !isTaskFull && <TaskInputForm onSubmit={submit} />}
      {
        taskList.map((item, index) =>
          <TaskItem key={index} item={item} />
        )
      }
    </div>
  );
}

export default TaskList;
