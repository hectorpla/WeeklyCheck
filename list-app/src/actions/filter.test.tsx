import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { notifySearchTextChange, FilterActionThunkDispatch, ChangeSearchText, FilterTasks, changeSearchText, FilterAction } from './index';
import { AppState } from '../types';
import { SEARCH_TEXT_CHANGE, FILTER_TASKS } from '../constants';
import { createMockState, createReadyTaskStatus } from '../mock/store';
import { mockWeekTasks } from '../mock/data';

// copy from the result of configureMockStore
type MockStore = MockStoreEnhanced<AppState, ThunkDispatch<AppState, void, FilterAction>>;

const middlewares = [thunk];
const mockStore = configureMockStore<AppState, FilterActionThunkDispatch>(middlewares);

describe('filter thunk action', () => {
  const mockTasks = mockWeekTasks;

  // TODO hard to test because the store initialization is complicated
  it('should generate text change action and filter tasks action when filter action issued', () => {
    const store: MockStore = mockStore(createMockState());
    const dispatch = store.dispatch;

    // intentionally make it wrong
    const expectedActions = [
      { type: SEARCH_TEXT_CHANGE, text: "12" } as ChangeSearchText,
      {
        type: FILTER_TASKS, day: "Monday",
        source: {
          status: createReadyTaskStatus(),
          list: mockTasks["Monday"]
        }
      } as FilterTasks
    ]

    return dispatch(notifySearchTextChange("12")).then(() => {
      const actions = store.getActions();
      expectedActions.forEach(action => {
        expect(actions).toContainEqual(action);
      })
    });
  });
});

describe('filter thunk reducer', () => {
  let store: MockStore;
  const expectedFullWeekTasks = mockWeekTasks;
  beforeEach(() => {
    store = mockStore(createMockState());
  })

  it('should pass all tasks when given empty input', () => {
    return store.dispatch(notifySearchTextChange("")).then(() => {
      expect(store.getState().filterSlice.fileredLists)
        .toEqual(expectedFullWeekTasks);
    });
  })

  it('should filter out unmatched tasks when search text changes', () => {

  })
});
