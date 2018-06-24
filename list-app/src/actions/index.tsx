import * as constants from '../constants/index';
import * as types from '../types/index';

export interface ActivateDay {
    type: constants.ACTIVATE_DAY // define the type of type
    day: constants.DAYS 
}

export interface Deactivate {
    type: constants.DEACTIVATE
}

export interface AddTask {
    type: constants.ADD_TASK;
    task: types.Task;
}

export interface RemoveTask {
    type: constants.REMOVE_TASK;
    index: number;
}

/* subtype of AddTask
    const addTaskToDayAction: AddTaskToDay = {
        type: constants.ADD_TASK,
        task: {code:1},
        day: 'Monday'
    }

    const addTaskAction: AddTask = addTaskToDayAction; // it works
*/
export interface AddTaskOnDay {
    type: constants.ADD_TASK;
    task: types.Task;
    day: constants.DAYS;
}

export interface RemoveTaskOnDay {
    type: constants.REMOVE_TASK;
    index: number;
    day: constants.DAYS;
}

// TODO: add interface ModifyTask

export type ToggleAction = ActivateDay | Deactivate;
// export type TaskAction = AddTask | RemoveTask;
export type TaskAction = AddTaskOnDay | RemoveTaskOnDay;

export function activate(day: constants.DAYS): ActivateDay {
    return {
        day,
        type: constants.ACTIVATE_DAY // assign the value of type
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
export function addTaskOnDay(task: types.Task, day: constants.DAYS): AddTaskOnDay {
    return {
        type: constants.ADD_TASK,
        task,
        day
    }
}

export function removeTaskOnDay(index: number, day: constants.DAYS): RemoveTaskOnDay {
    return {
        type: constants.REMOVE_TASK,
        index,
        day
    }
}

