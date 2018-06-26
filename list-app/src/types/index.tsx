import { DAYS } from '../constants/index';

/*
* sub-store for active DayCard
*/
export interface DayToggleState {
    activeDay: DAYS | void;
    currentTime: Date; // put here?
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
export interface PrevCurNextTaskLists {
    prev?: DailyTaskList;
    cur: DailyTaskList;
    next?: DailyTaskList;
}
export type PrevCurNextKey = keyof PrevCurNextTaskLists;

// to store the whole message of the task lists
// actually strictly two weeks for per day in runtime
export type TasksOfRecentWeeks = {
    [day in DAYS]: PrevCurNextTaskLists;
}

// sub-store: active week for a DayCard
export type ActiveWeekOnDays = {
    [day in DAYS]: PrevCurNextKey;
}

export interface AppState {
    activeDaySlice: DayToggleState,
    activeWeekSlice: ActiveWeekOnDays,
    allTaskListSlice: TasksOfRecentWeeks
}
