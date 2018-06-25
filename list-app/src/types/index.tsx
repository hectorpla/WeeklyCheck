import { DAYS } from '../constants/index';

export interface DayToggleState {
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

// to store the whole message of the task lists
// actually strictly two weeks for per day in runtime
export type TasksOfRecentWeeks = {
    [day in DAYS]: DayCardTaskLists;
}

export type ActiveCardListOnDays = {
    [day in DAYS]: DailyTaskList;
}
