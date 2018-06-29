import * as Debug from 'debug';
import * as React from 'react';
import { DAYS } from '../../constants';
import { TaskInputFormWithId } from '../../forms/TaskInputForm';
import { PrevCurNextKey, Task } from '../../types';
import TaskItem from '../TaskItem/TaskItem';

const debug = Debug('component:TaskList');

// think again: too much information for a list?
export interface Props {
  day: DAYS;
  week: PrevCurNextKey;
  taskList: Task[];
  deleteTask?: (index: number) => void;
  addTask?: (task: Task) => void;
}

function TaskList({ taskList, addTask, week, day, deleteTask }: Props) {
  // first do integration without type
  const submit = (values: any) => {
    debug(`form values: ${values}`);
    // enhanced by the container, safe to unwrap
    addTask!({
      code: values.code
    });
  }

  // dynamically generated, TODO: performance issue
  const TaskInputForm = TaskInputFormWithId(day + '-' + week, false);
  
  const isTaskFull = taskList.length === 5;

  return (
    <div>
      { !isTaskFull && <TaskInputForm onSubmit={submit} />}
      {
        taskList.map((item, index) => {
          const handleDelete = () => deleteTask!(index);
          return (
            <TaskItem key={index} item={item}
              onDelete={handleDelete} />
          )
        })
      }
    </div>
  );
}

export default TaskList;
