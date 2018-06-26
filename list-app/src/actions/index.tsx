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
    task: types.Task;
}

export interface RemoveTask {
    type: constants.REMOVE_TASK;
    index: number;
}

export interface AddTaskOnDay {
    type: constants.ADD_TASK;
    task: types.Task;
    day: constants.DAYS;
    week: types.PrevCurNextKey;
}

export interface RemoveTaskOnDay {
    type: constants.REMOVE_TASK;
    index: number;
    day: constants.DAYS;
    week: types.PrevCurNextKey;
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

/*
* over-all actions in the app
*/
export type ToggleAction = ActivateDay | Deactivate;
// export type TaskAction = AddTask | RemoveTask;
export type TaskAction = AddTaskOnDay | RemoveTaskOnDay;
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
export function addTaskOnDay(task: types.Task, day: constants.DAYS, 
        week: types.PrevCurNextKey): AddTaskOnDay {
    return {
        type: constants.ADD_TASK,
        task,
        day,
        week
    }
}

export function removeTaskOnDay(index: number, day: constants.DAYS,
        week: types.PrevCurNextKey): RemoveTaskOnDay {
    return {
        type: constants.REMOVE_TASK,
        index,
        day,
        week
    }
}

export function setActiveWeekOnDay(day: constants.DAYS, 
        weekToActivate: types.PrevCurNextKey): ActivateWeekOnDay {
            return {
        type: constants.ACTIVATE_WEEK_ON_DAY,
        day,
        activeWeek: weekToActivate
    }
}
