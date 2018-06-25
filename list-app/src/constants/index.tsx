export type DAYS = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
export const WEEK_DAYS = {
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

export enum WeekActiveOnCard {
    Prev,
    Current,
    Next,
} 

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
