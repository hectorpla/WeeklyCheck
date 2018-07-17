import { AppState, DailyTasks, PrevCurNextTaskLists, Task } from "../types";
import { mockWeekTasks } from './data';
import { DAYS, EMPTY_FILTER_KEY } from "../constants";

function createEmptyDailyTasks(tasks: Task[] = []): DailyTasks {
  return {
    status: {
      fetched: true,
      isFetching: false,
      didInvalidate: false,
      isFetchFailed: true
    },
    list: []
  };
}

function createPrevCurNextTaskListwithCur(day: DAYS): PrevCurNextTaskLists {
  return {
    prev: createEmptyDailyTasks(),
    cur: createEmptyDailyTasks(mockWeekTasks[day]),
    next: createEmptyDailyTasks()
  }
}

// much boilerplate: for whole structure reference
export const mockState: AppState = {
  activeDaySlice: {
    activeDay: undefined,
    currentTime: new Date()
  },
  activeWeekSlice: {
    Monday: "cur",
    Tuesday: "cur",
    Wednesday: "cur",
    Thursday: "cur",
    Friday: "cur",
    Saturday: "cur",
    Sunday: "cur"
  },
  allTaskListSlice: {
    Monday: createPrevCurNextTaskListwithCur('Monday'),
    Tuesday: createPrevCurNextTaskListwithCur('Tuesday'),
    Wednesday: createPrevCurNextTaskListwithCur('Wednesday'),
    Thursday: createPrevCurNextTaskListwithCur('Thursday'),
    Friday: createPrevCurNextTaskListwithCur('Friday'),
    Saturday: createPrevCurNextTaskListwithCur('Saturday'),
    Sunday: createPrevCurNextTaskListwithCur('Sunday')
  },
  filterSlice: {
    fileredLists: {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: []
    },
    filterKey: EMPTY_FILTER_KEY
  },
  form: {}
}