import { AppState } from '../types';
import { createMockState } from '../mock/store';
import { mockWeekTasks } from '../mock/data';
import { taskListFilter as reducer } from './search';
import { filterTasksWithSource } from '../actions';

// copy from the result of configureMockStore

// const middlewares = [thunk];
// const mockStore = configureMockStore<AppState, FilterActionThunkDispatch>(middlewares);

// TODO: tests require the AppState although the reducer takes TaskFilterState
// mock it
describe('filter thunk reducer', () => {
  let state: AppState;
  const expectedFullWeekTasks = mockWeekTasks;
  beforeEach(() => {
    state = createMockState();
  })

  it('should pass all tasks when given empty input', () => {
    reducer(state, filterTasksWithSource())
  })

  it('should filter out unmatched tasks when search text changes', () => {

  })
});
