import { DAYS } from '../constants/index';

/*
* tentative type for a unit datum: task
*/
export interface Task {
    code: number;
    description?: string;
    tags?: string[];
}

export interface FetchableItemStatus {
    fetched: boolean; // set to true once fetched
    isFetching: boolean;
    didInvalidate: boolean;
    isFetchFailed: boolean;
}

// should do restriction of its length, check in runtime?
export interface DailyTasks {
    list: Task[];
    status: FetchableItemStatus;
}

/*  
* For previous/next week
? the most profound assumption in the app ?
*/
export interface PrevCurNextTaskLists {
    prev: DailyTasks;
    cur: DailyTasks; // might be optional
    next: DailyTasks;
} // ! two types coupled, consider deliberately to change the interface
export type PrevCurNextKey = keyof PrevCurNextTaskLists;

export type TasksOfRecentWeeks = {
    [day in DAYS]: PrevCurNextTaskLists;
}

/* 
* sub-store: active week for a DayCard
*/
export type ActiveWeekOnDays = {
    [day in DAYS]: PrevCurNextKey;
}

/*
* sub-store for active DayCard
*/
export interface DayToggleState {
    activeDay: DAYS | void;
    currentTime: Date; // TODO: extract the time info into another slice
}


/*
* sub-store containing the filtered reference of tasks for each
* should be updated whenenver the filter changes or TODO: task source is changed
*/
export interface TaskFilterState {
    // value: list of reference to tasks in current week
    fileredLists: { [day in DAYS]: number[] };
    filterKey: number;
}

/* 
! root for the tasks memory
* sub-store to store the whole message of the task lists
*/
export interface TaskState {
    taskOfRecentWeek: TasksOfRecentWeeks;
    taskFilterState: TaskFilterState;
}

/*
* the overall states of the app
* both activeWeekSlice activeDaySlice are for UI purpose
* allTaskListSlice for business logic (contract with server)
*/
export interface AppState {
    activeDaySlice: DayToggleState;
    activeWeekSlice: ActiveWeekOnDays;
    allTaskListSlice: TaskState;
}
