import * as Debug from 'debug';
import { TaskAction, TaskListOpAction, TaskLoadAction } from "../actions";
import { ADD_TASK, FETCH_TASKS, INVALIDATE_TASKS, RECEIVE_TASKS, REMOVE_TASK } from "../constants";
import { DailyTasks, PrevCurNextTaskLists, Task, TasksOfRecentWeeks } from "../types";

// TODO: enable debug in browser, in console: localStorage.debug = 'worker:*' 
const debugNamespace = 'reducer:task';
const debug = Debug(debugNamespace);

// the interface and the function should be coupled
export type TaskReducer =
  (state: DailyTasks, action: TaskListOpAction) => DailyTasks;

function createOneWeekTasks() {
  return {
    list: [],
    status: {
      fetched: false,
      isFetching: false,
      didInvalidate: false,
      isFetchFailed: false
    }
  }
}

function createInitThreeWeekTasks(): PrevCurNextTaskLists {
  // consider the reason for allowing current again
  return {
    prev: createOneWeekTasks(),
    cur: createOneWeekTasks(),
    next: createOneWeekTasks()
  }
}

export function createInitAllWeekTasks(): TasksOfRecentWeeks {
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

function taskListOpReducer(
  state: Task[],
  action: TaskListOpAction,
): Task[] {
  // if (!state) {
  //   return state;
  // }
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

// TODO: reduce boilerplate using libs
function taskDisplayReducer(
  state: DailyTasks, 
  action: TaskLoadAction
): DailyTasks {
  const { list, status } = state;
  switch(action.type) {
    case INVALIDATE_TASKS:
      return {
        list,
        status: {
          ...status,
          didInvalidate: true
        }
      }
    case FETCH_TASKS:
      return {
        list,
        status: {
          ...status,
          isFetching: true,
          didInvalidate: false
        }
      }
    case RECEIVE_TASKS:
      return {
        list: action.taskList,
        status: {
          ...status,
          fetched: true,
          isFetching: false,
        }
      }
    default: return state;
  }
}

// TODO: write test
export function taskMultiplexReducer(
  state: TasksOfRecentWeeks = createInitAllWeekTasks(),
  action: TaskAction,
): TasksOfRecentWeeks {
  debug(`state ${JSON.stringify(state)}, action: ${JSON.stringify(action)}`);
  if (!state || !action.day) { // TODO: for test
    return state;
  }

  function getTasks(): DailyTasks {
    const { day, week } = action;
    const tasks = state[day][week];
    debug(`${day}, ${week}, ${tasks}`);
    return tasks;
  }

  function replaceTasks(newState: TasksOfRecentWeeks, 
    tasks: DailyTasks
  ): TasksOfRecentWeeks {
    // expect newState !== state
    const { day, week } = action;
    return {
      ...newState,
      [action.day]: {
        ...newState[day],
        [week]: tasks
      }
    }
  }

  const tasksInState: DailyTasks = getTasks();
  switch (action.type) {
    case ADD_TASK:
    case REMOVE_TASK:
      return replaceTasks(
        { ...state },
        {
          list: taskListOpReducer(tasksInState.list, action),
          status: tasksInState.status
        }
      );
    case INVALIDATE_TASKS:
    case FETCH_TASKS:
    case RECEIVE_TASKS:
      return replaceTasks({...state},
        taskDisplayReducer({...tasksInState}, action)
      );
    default:
      return state;
  }
}

