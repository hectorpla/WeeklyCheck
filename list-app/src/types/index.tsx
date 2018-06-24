import { DAYS } from '../constants/index';

export interface AppState {
    activeDay: DAYS | void;
    currentTime: Date;
}

/*
* tentative type for a unit datum: task
*/
export interface Task {
    code: number;
    subscription?: string;
    tags?: string[];
}

// type TaskListIndex = 1 | 2 | 3 | 4 | 5;

// should do restriction of its length, check in runtime?
export type DailyTaskList = Task[];

/*  
* For previous/next week
*/
export interface DayCardTaskLists {
    prevWeekTasks?: DailyTaskList;
    curWeekTasks: DailyTaskList;
    nextWeekTask?: DailyTaskList;
}

export type WeeklyTasks = {
    [day in DAYS]: DailyTaskList;
}
