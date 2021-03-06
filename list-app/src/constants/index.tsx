export type DAYS = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
export const WEEK_DAYS: { [day in DAYS]: number } = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 0
}
export const WEEK_DAY_ARRAY: DAYS[] =
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export enum TASK_GRAIN {
    WEEK,
    DAY
}

export const EMPTY_FILTER_KEY = -9999;

export const REFRESH_TIME = 'REFRESH_TIME';
export type REFRESH_TIME = typeof REFRESH_TIME;

export const ACTIVATE_DAY = 'ACTIVATE_DAY';
export type ACTIVATE_DAY = typeof ACTIVATE_DAY;

export const DEACTIVATE = 'DEACTIVATE';
export type DEACTIVATE = typeof DEACTIVATE;

export const ADD_TASK = 'ADD_TASK';
export type ADD_TASK = typeof ADD_TASK;

export const REMOVE_TASK = 'REMOVE_TASK';
export type REMOVE_TASK = typeof REMOVE_TASK;

export const MODIFY_TASK = 'MODIFY_TASK';
export type MODIFY_TASK = typeof MODIFY_TASK;

export const ACTIVATE_WEEK_ON_DAY = 'ACTIVATE_WEEK';
export type ACTIVATE_WEEK_ON_DAY = typeof ACTIVATE_WEEK_ON_DAY;

export const FETCH_TASKS_BATCH = 'FETCH_TASKS_BATCH';
export type FETCH_TASKS_BATCH = typeof FETCH_TASKS_BATCH;

export const FETCH_TASKS = 'FETCH_TASKS';
export type FETCH_TASKS = typeof FETCH_TASKS;

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export type RECEIVE_TASKS = typeof RECEIVE_TASKS;

export const INVALIDATE_TASKS = 'INVALIDATE_TASKS';
export type INVALIDATE_TASKS = typeof INVALIDATE_TASKS;

export const UPLOAD_CHANGE = 'UPLOAD_CHANGE';
export type UPLOAD_CHANGE = 'UPLOAD_CHANGE';

export const SEARCH_TEXT_CHANGE = 'SEARCH_TEXT_CHANGE';
export type SEARCH_TEXT_CHANGE = typeof SEARCH_TEXT_CHANGE;

export const FILTER_TASKS = 'FILTER_TASKS';
export type FILTER_TASKS = typeof FILTER_TASKS;
