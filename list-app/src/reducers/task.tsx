import { TaskAction } from "../actions";
import { ADD_TASK, REMOVE_TASK } from "../constants";
import { DailyTaskList, PrevCurNextTaskLists, TasksOfRecentWeeks } from "../types";

// the interface and the function should be coupled
export type TaskReducer = (state: DailyTaskList, action: TaskAction) => DailyTaskList;

// TODO: wanted to reuse this implementation
// export function taskReducer(state: DailyTaskList = [], action: TaskAction): DailyTaskList {
//     switch(action.type) {
//         case ADD_TASK:
//             // TODO: to check length
//             return [...state, action.task];
//         case REMOVE_TASK:
//             let newState = [...state];
//             newState.splice(action.index, 1);
//             return newState;
//     }
//     return state;
// }

function createInitWeekTasks(): PrevCurNextTaskLists {
    return {
        cur: []
    };
}

function createInitState() {
    return {
        Monday: createInitWeekTasks(),
        Tuesday: createInitWeekTasks(),
        Wednesday: createInitWeekTasks(),
        Thursday: createInitWeekTasks(),
        Friday: createInitWeekTasks(),
        Saturday: createInitWeekTasks(),
        Sunday: createInitWeekTasks()
    };
}

export function taskMultiplexReducer(state: TasksOfRecentWeeks = createInitState(),
    action: TaskAction): TasksOfRecentWeeks {
    if (!state || !action.day) { // TODO: for test
        return state;
    }
    const { day, week } = action;
    const listInState = state[day][week];

    if (!listInState) {
        alert("taskMultiplexReducer: should not happend");
        return state;
    }

    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                [day]: [...listInState, action.task]
            }
        case REMOVE_TASK:
            const taskList = [...listInState];
            taskList.splice(action.index, 1);
            return {
                ...state,
                [day]: taskList
            };
    }
}
