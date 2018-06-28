import { DAYS, WEEK_DAYS } from "../constants";
import { PrevCurNextKey } from "../types";

export function addDays(date: Date, dayDelta: number): Date {
    const newDay = new Date(date);
    newDay.setDate(newDay.getDate() + dayDelta);
    return newDay;
}

// TODO: check implentation
// TODO: Test
/*
* given the reference time, calculate the relative date of day 
*/
export function calculateRelativeDate(day: DAYS, ref: Date): Date {
    const dayNum = WEEK_DAYS[day] - ref.getDay();
    const calculatedTime = addDays(ref, dayNum);
    return calculatedTime;
}

/*
* given the reference time and a day, decide the whether the day is
* current week or next week
*/
export function getEditableWeek(day: DAYS, ref: Date): PrevCurNextKey {
    const relativeDate = calculateRelativeDate(day, ref);
    if (relativeDate >= ref) {
        return 'cur';
    }
    return 'next';
}

export function toMonthDateString(date: Date) {
    return `${date.getMonth()}-${date.getDate()}`;
}