import { DAYS, WEEK_DAYS } from "../constants";

export function addDays(date: Date, days: number): Date {
    const newDay = new Date(date);
    newDay.setDate(newDay.getDate() + days);
    return newDay;
}
  
// TODO: check implentation
// TODO: Test
export function calculateDate(day: DAYS, time: Date): Date {
    const dayNum = WEEK_DAYS[day] - time.getDay();
    const calculatedTime = addDays(time, dayNum);
    return calculatedTime;
}

export function toMonthDateString(date: Date) {
    return `${date.getMonth()}-${date.getDate()}`;
}
