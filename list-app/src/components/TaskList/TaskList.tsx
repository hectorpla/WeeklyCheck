import * as Debug from 'debug';
import * as React from 'react';
import { DAYS } from '../../constants';
import { TaskInputFormWithId } from '../../forms/TaskInputForm';
import { SimpleTaskList } from '../../SimpleTaskList';
import { DailyTasks, PrevCurNextKey, Task } from '../../types';
import TaskItem from '../TaskItem/TaskItem';

const debug = Debug('component:TaskList');

// think again: too much information for a list?
export interface Props {
  day: DAYS;
  week: PrevCurNextKey;
  editable: boolean;
  tasks?: DailyTasks;
  isCardActive?: boolean;
  deleteTask?: (index: number) => void;
  addTask?: (task: Task) => void;
}

function TaskList({ week, day, tasks, editable, isCardActive, addTask, deleteTask }: Props) {
  tasks = tasks!; // unwrap, mix-in props by container
  if (!isCardActive) {
    return <SimpleTaskList tasks={tasks.list.map(x => x.code)} />
  }
  
  // first do integration without type
  const submit = (values: any) => {
    debug(`form values: ${values}`);
    // enhanced by the container, safe to unwrap
    addTask!({
      code: values.code
    });
    // TODO: invalidate tasks
  }

  // ?dynamically generated, TODO: performance issue?
  const TaskInputForm = TaskInputFormWithId(day + '-' + week, false);
  
  const tasklist = tasks.list;
  const isTaskFull = tasklist.length === 5;

  // TODO: fetch data from server
  
  return (
    <div>
      <pre> {JSON.stringify(tasks.status)} </pre>
      { !tasks.status.didInvalidate }
      { editable && !isTaskFull && <TaskInputForm onSubmit={submit} />}
      {
        tasklist.map((item, index) => {
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
