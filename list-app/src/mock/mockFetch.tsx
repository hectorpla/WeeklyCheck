import { WeekTasks } from "../apis";
import { TASK_GRAIN } from "../constants";
import { Task } from "../types";

export function fakeFetchWeekTasks(
  grain: TASK_GRAIN.DAY,
  startTime: Date): Promise<WeekTasks> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        Monday: [{ code: 12 }, { code: 23 }],
        Tuesday: [{ code: 111, description: "haha" }],
        Wednesday: [{ code: 11111 }, { code: 99 }, { code: 87 }],
        Thursday: [],
        Friday: [{ code: 23, description: "im 23" }, { code: 11 }],
        Saturday: [],
        Sunday: [{ code: 122 }, { code: 88 }]
      });
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
