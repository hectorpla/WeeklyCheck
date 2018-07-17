import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { notifySearchTextChange, FilterActionThunkDispatch, ChangeSearchText, FilterTasks, changeSearchText } from './index';
import { AppState } from '../types';
import { SEARCH_TEXT_CHANGE, FILTER_TASKS } from '../constants';
import { mockState } from '../mock/store';

const middlewares = [thunk];
const mockStore = configureMockStore<AppState, FilterActionThunkDispatch>(middlewares);

describe('filter thunk action', () => {
  afterEach(() => {

  });

  // TODO hard to test because the store initialization is complicated
  it('should generate text change action and filter tasks action when filter action issued', () => {
    const store = mockStore(mockState);
    const dispatch = store.dispatch;

    // intentionally make it wrong
    const expectedActions = [
      { type: SEARCH_TEXT_CHANGE, text: "12" } as ChangeSearchText,
      { type: FILTER_TASKS, day: "Monday" } as FilterTasks
    ]

    dispatch(notifySearchTextChange("12")).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  });
});
