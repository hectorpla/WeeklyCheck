import * as Debug from 'debug';
import { TaskListOpAction } from "../actions";
import { ADD_TASK, REMOVE_TASK } from "../constants";
import { DailyTaskList, PrevCurNextTaskLists, Task, TasksOfRecentWeeks } from "../types";

// TODO: enable debug in browser, in console: localStorage.debug = 'worker:*' 
const debugNamespace = 'reducer:task';
const debug = Debug(debugNamespace);

// the interface and the function should be coupled
export type TaskReducer =
  (state: DailyTaskList, action: TaskListOpAction) => DailyTaskList;

function createInitThreeWeekTasks(): PrevCurNextTaskLists {
  return {
    cur: [] // consider the reason for it again
  };
}

export function createInitAllWeekTasks() {
  return {
    Monday: createInitThreeWeekTasks(),
    Tuesday: createInitThreeWeekTasks(),
    Wednesday: createInitThreeWeekTasks(),
    Thursday: createInitThreeWeekTasks(),
    Friday: createInitThreeWeekTasks(),
    Saturday: createInitThreeWeekTasks(),
    Sunday: createInitThreeWeekTasks()
  };
}

export function taskReducer(
  state: Task[] | void,
  action: TaskListOpAction,
): Task[] | void {
  if (!state) {
    return state;
  }
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.task];
    case REMOVE_TASK:
      const newState = [...state];
      newState.splice(action.index, 1);
      return newState;
  }
  return state;
}

// TODO: write test
export function taskMultiplexReducer(
  state: TasksOfRecentWeeks = createInitAllWeekTasks(),
  action: TaskListOpAction,
): TasksOfRecentWeeks {
  debug(`state ${JSON.stringify(state)}, action: ${JSON.stringify(action)}`);
  if (!state || !action.day) { // TODO: for test
    return state;
  }

  function getTaskList() {
    const { day, week } = action;
    const list = state[day][week];
    debug(`${day}, ${week}, ${list}`);
    return list;
  }

  function replaceList(newState: TasksOfRecentWeeks, list: Task[] | void) {
    // expect newState !== state
    const { day, week } = action;
    return {
      ...newState,
      [action.day]: {
        ...newState[day],
        [week]: list
      }
    }
  }

  switch (action.type) {
    case ADD_TASK:
    case REMOVE_TASK:
      const listInState = getTaskList();
      if (!listInState) {
        return state;
      }
      return replaceList(
        { ...state },
        taskReducer(listInState, action)
      );
    default:
      return state;
  }
}

// TODO task display reducer
