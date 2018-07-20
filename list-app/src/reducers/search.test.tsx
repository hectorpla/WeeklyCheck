import { TaskFilterState, AppState, DailyTasks } from '../types';
import { createMockState } from '../mock/store';
import { mockWeekTasks } from '../mock/data';
import { taskListFilter as reducer } from './search';
import { filterTasksWithSource, changeSearchText } from '../actions';
import { EMPTY_FILTER_KEY, DAYS, WEEK_DAY_ARRAY } from '../constants';

// copy from the result of configureMockStore

// const middlewares = [thunk];
// const mockStore = configureMockStore<AppState, FilterActionThunkDispatch>(middlewares);

// TODO: tests require the AppState although the reducer takes TaskFilterState
// mock it
describe('filter reducer', () => {
  let wholeState: AppState;
  let filterState: TaskFilterState;
  const expectedFullWeekTasks = mockWeekTasks;

  beforeEach(() => {
    wholeState = createMockState();
    filterState = wholeState.filterSlice;
  });

  describe('search text change action', () => {
    it('should update search text to default given invalid input', () => {
      reducer(filterState, changeSearchText(""));
      expect(filterState.filterKey).toEqual(EMPTY_FILTER_KEY);

      reducer(filterState, changeSearchText("ad"));
      expect(filterState.filterKey).toEqual(EMPTY_FILTER_KEY);

      reducer(filterState, changeSearchText("123add"));
      expect(filterState.filterKey).toEqual(EMPTY_FILTER_KEY);

      reducer(filterState, changeSearchText("ad12"));
      expect(filterState.filterKey).toEqual(EMPTY_FILTER_KEY);
    });

    it('should update search text to parsed number given valid input', () => {
      reducer(filterState, changeSearchText("0"));
      expect(filterState.filterKey).toEqual(0);

      reducer(filterState, changeSearchText("1"));
      expect(filterState.filterKey).toEqual(1);

      // spec might change
      reducer(filterState, changeSearchText("-1"));
      expect(filterState.filterKey).toEqual(-1);

      reducer(filterState, changeSearchText("123"));
      expect(filterState.filterKey).toEqual(123);
    });
  });

  type StringToDailyTasks = { [day: string]: DailyTasks };
  describe('filter task actions', () => {
    // type loose coupled with the properties: 
    let sources: StringToDailyTasks;
    let emptySources: StringToDailyTasks;
    beforeAll(() => {
      const { allTaskListSlice } = wholeState;

      // construct source of truths of daily tasks
      sources = WEEK_DAY_ARRAY.reduce(
        (obj: Object, day: DAYS) => {
          return { ...obj, [day]: allTaskListSlice[day]['cur'] }
        },
        {}
      );

      emptySources = WEEK_DAY_ARRAY.reduce(
        (obj: Object, day: DAYS) => {
          return { ...obj, [day]: [] }
        },
        {}
      );
    });

    // boilerplate ...
    it('should pass all tasks when no filter applies', () => {
      filterState.filterKey = EMPTY_FILTER_KEY;
      expect(
        reducer(
          filterState,
          filterTasksWithSource('Monday', sources.Monday)
        )
      ).toEqual({
          ...filterState,
          fileredLists: {
            ...filterState.fileredLists,
            Monday: [{ code: 12 }, { code: 23 }] // meat part
          }
        });
    });

    it('should filter out unmatched tasks when search text is valid', () => {
      filterState.filterKey = 12;
      expect(reducer(
        filterState,
        filterTasksWithSource('Monday', sources.Monday)
      )).toEqual({
        ...filterState,
          fileredLists: {
            ...filterState.fileredLists,
            Monday: [{ code: 12 }]
          }
      })
    });
  })
});
