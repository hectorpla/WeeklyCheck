export type DAY = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
export const WEEK_DAYS = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7
}
export const WEEK_DAY_ARRAY: DAY[] = 
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const ACTIVATE_DAY = 'ACTIVATE_DAY';
export type ACTIVATE_DAY = typeof ACTIVATE_DAY;

export const DEACTIVATE = 'DEACTIVATE';
export type DEACTIVATE = typeof DEACTIVATE;
