import { DAYS, EMPTY_FILTER_KEY } from "../constants";
import { AppState, DailyTasks, FetchableItemStatus, PrevCurNextTaskLists, Task } from "../types";
import { mockWeekTasks } from './data';

export function createReadyTaskStatus(): FetchableItemStatus {
  return {
    fetched: true,
    isFetching: false,
    didInvalidate: false,
    isFetchFailed: true
  };
}

function createEmptyDailyTasks(tasks: Task[] = []): DailyTasks {
  return {
    status: createReadyTaskStatus(),
    list: tasks
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
export const createMockState: () => AppState = () => {
  return {
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
}
