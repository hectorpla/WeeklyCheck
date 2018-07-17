import { WeekTasks } from "../apis";
import { TASK_GRAIN } from "../constants";
import { Task } from "../types";
import { mockWeekTasks } from "./data";

export function fakeFetchWeekTasks(
  grain: TASK_GRAIN.DAY,
  startTime: Date): Promise<WeekTasks> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockWeekTasks);
    }, 500);
  });
}

export function fakeFetchDayTasks(
  grain: TASK_GRAIN.DAY,
  startTime: Date
): Promise<Task[]> {
  return new Promise(resolve => {
    resolve([
      {code: 222}, 
      {code:333}, 
      {code: 21}
    ]);
  })
}
