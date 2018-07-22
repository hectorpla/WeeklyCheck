import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { FILTER_TASKS, SEARCH_TEXT_CHANGE } from '../constants';
import { mockWeekTasks } from '../mock/data';
import { createMockState, createReadyTaskStatus } from '../mock/store';
import { AppState } from '../types';
import { ChangeSearchText, FilterAction, FilterActionThunkDispatch, FilterTasks, notifySearchTextChange } from './index';

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
          list: mockTasks.Monday
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
