import * as constants from '../constants/index';
import * as types from '../types/index';

// TODO: add full documentation later 

/*
* action to activate day among Monday to Sunday
*/
export interface ActivateDay {
  type: constants.ACTIVATE_DAY // define the type of type
  day: constants.DAYS
}

export interface Deactivate {
  type: constants.DEACTIVATE
}

export interface AddTask {
  type: constants.ADD_TASK;
  day: constants.DAYS;
  week: types.PrevCurNextKey;
  task: types.Task;
}

export interface RemoveTask {
  type: constants.REMOVE_TASK;
  day: constants.DAYS;
  week: types.PrevCurNextKey;
  index: number;
}
// TODO: add interface ModifyTask


/*
* action to activate which week should be displayed on a DayCard
*/
export interface ActivateWeekOnDay {
  type: constants.ACTIVATE_WEEK_ON_DAY;
  day: constants.DAYS;
  activeWeek: types.PrevCurNextKey
}

export interface FetchTasks {
  type: constants.FETCH_TASKS;
  day: constants.DAYS;
  week: types.PrevCurNextKey;
}

export interface ReceiveTasks {
  type: constants.RECEIVE_TASKS;
  day: constants.DAYS;
  week: types.PrevCurNextKey;
  taskList: types.Task[];
}

export interface InvalidateTasks {
  type: constants.INVALIDATE_TASKS;
  day: constants.DAYS;
  week: types.PrevCurNextKey;
}

/*
* over-all actions in the app
*/
export type ToggleAction = ActivateDay | Deactivate;

export type TaskListOpAction = AddTask | RemoveTask;
export type TaskLoadAction = InvalidateTasks | FetchTasks | ReceiveTasks;
export type TaskAction = TaskListOpAction | TaskLoadAction;

export type AppAction = ToggleAction | TaskAction | ActivateWeekOnDay;


export function activate(day: constants.DAYS): ActivateDay {
  return {
    type: constants.ACTIVATE_DAY, // assign the value of type
    day
  }
}

export function deactivate(): Deactivate {
  return {
    type: constants.DEACTIVATE
  }
}

/* 
* only action with a specific day should be generated
* no need to define addTask(task)
*/
// TODO: should be addTaskOnDate?
export function addTask(task: types.Task, day: constants.DAYS,
  week: types.PrevCurNextKey): AddTask {
  return {
    type: constants.ADD_TASK,
    day,
    week,
    task
  }
}

export function removeTask(index: number,
  day: constants.DAYS,
  week: types.PrevCurNextKey
): RemoveTask {
  return {
    type: constants.REMOVE_TASK,
    day,
    week,
    index
  }
}

export function setActiveWeekOnDay(day: constants.DAYS,
  weekToActivate: types.PrevCurNextKey
): ActivateWeekOnDay {
  return {
    type: constants.ACTIVATE_WEEK_ON_DAY,
    day,
    activeWeek: weekToActivate
  }
}

export function invalidateTasks(day: constants.DAYS,
week: types.PrevCurNextKey): InvalidateTasks {
  return {
    type: constants.INVALIDATE_TASKS,
    day,
    week
  }
}

export function fetchTasks(day: constants.DAYS,
  week: types.PrevCurNextKey
): FetchTasks {
  return {
    type: constants.FETCH_TASKS,
    day,
    week
  }
}

export function receiveTasks(day: constants.DAYS,
week: types.PrevCurNextKey,
taskList: types.Task[]): ReceiveTasks {
  return {
    type: constants.RECEIVE_TASKS,
    day,
    week,
    taskList
  }
}
