import { FilterAction, FilterTasks } from "../actions";
import { EMPTY_FILTER_KEY, FILTER_TASKS, SEARCH_TEXT_CHANGE } from "../constants";
import { TaskFilterState, WeekTaskLists } from "../types";

// TODO: action creator with thunk helps with accessing the other slice of the App state
function createFilterLists(): WeekTaskLists {
  return {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
  };
}

// ? alternative flow instead of switch statement
export function taskListFilter(
  state: TaskFilterState = { filterKey: EMPTY_FILTER_KEY, fileredLists: createFilterLists() },
  action: FilterAction,
): TaskFilterState {
  if (action.type === SEARCH_TEXT_CHANGE) {
    const { text } = action;
    return {
      ...state,
      filterKey: text !== "" ? parseInt(text, 10) : EMPTY_FILTER_KEY
    }
  }

  if (action.type !== FILTER_TASKS) {
    return state;
  }
  const { fileredLists, filterKey } = state;
  const { day, source } = action as FilterTasks;

  // ? should check validation here, TODO: correct use of status
  const filteredItems = source.status.didInvalidate ?
    [] :
    source.list.filter(
      task => task.code === filterKey || filterKey === EMPTY_FILTER_KEY
    ) // TODO: bug, invalid input like "ad"

  return {
    ...state,
    fileredLists: {
      ...fileredLists,
      [day]: filteredItems
    }
  }
}
