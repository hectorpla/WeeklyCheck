import { DAYS, TASK_GRAIN } from "../constants";
import { Task } from "../types";

export type WeekTasks = {
  [day in DAYS]: Task[]
}

export interface TasksFetcher {
  (grain: TASK_GRAIN.DAY, startTime: Date): Promise<Task[]>;
  (grain: TASK_GRAIN.WEEK, startTime: Date): Promise<WeekTasks>;
}
