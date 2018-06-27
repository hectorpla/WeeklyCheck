import * as Debug from 'debug';
import { TaskAction } from "../actions";
import { ADD_TASK, REMOVE_TASK } from "../constants";
import { DailyTaskList, PrevCurNextTaskLists, Task, TasksOfRecentWeeks } from "../types";

// the interface and the function should be coupled
export type TaskReducer = (state: DailyTaskList, action: TaskAction) => DailyTaskList;

function createInitThreeWeekTasks(): PrevCurNextTaskLists {
    return {
        cur: []
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

// TODO: enable debug in browser, in console: localStorage.debug = 'worker:*' 
const debugNamespace = 'reducer:task';
const debug = Debug(debugNamespace);

export function taskMultiplexReducer(state: TasksOfRecentWeeks = createInitAllWeekTasks(),
    action: TaskAction): TasksOfRecentWeeks {
    debug(`state ${JSON.stringify(state)}, action: ${JSON.stringify(action)}`);
    if (!state || !action.day) { // TODO: for test
        return state;
    }
    // const { day, week } = action;
    // const listInState = state[day][week];
    
    // debug(`${day}, ${week}, ${listInState}`);
    // alert(listInState);

    // if (!listInState) {
    //     alert("taskMultiplexReducer: should not happend");
    //     return state;
    // }

    function getTaskList() {
        const { day, week } = action;
        const list = state[day][week];
        debug(`${day}, ${week}, ${listInState}`);

        if (!list) {
            alert("taskMultiplexReducer: should not happend");
            return undefined;
        }
        return list;
    }

    let listInState: Task[] | void
    switch (action.type) {
        case ADD_TASK:
            listInState = getTaskList();
            if (!listInState) {
                return state;
            }
            return {
                ...state,
                [action.day]: [...listInState, action.task]
            }
        case REMOVE_TASK:
            // TODO: duplicate code
            listInState = getTaskList();
            if (!listInState) {
                return state;
            }
            const taskList = [...listInState];
            taskList.splice(action.index, 1);
            return {
                ...state,
                [action.day]: taskList
            };
        default:
            return state;
    }
}
