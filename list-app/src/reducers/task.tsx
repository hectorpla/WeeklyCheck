import { ADD_TASK, REMOVE_TASK } from "../constants";
import { DailyTaskList } from "../types";
import { TaskAction } from "../actions";

// the interface and the function should be coupled
export interface TaskReducer {
    (state: DailyTaskList, action: TaskAction): DailyTaskList;
}

export function taskReducer(state: DailyTaskList = [], action: TaskAction): DailyTaskList {
    switch(action.type) {
        case ADD_TASK:
            // TODO: to check length
            return [...state, action.task];  
        case REMOVE_TASK:
            let newState = [...state];
            newState.splice(action.index, 1);
            return newState;
    }
    return state;
}