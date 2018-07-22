import { ActionsObservable, Epic, StateObservable } from 'redux-observable';
import { filter, map } from 'rxjs/operators';
import { ActivateWeekOnDay, AppAction, FilterTasks, filterTasksWithSource } from '../actions';
import { ACTIVATE_WEEK_ON_DAY } from '../constants';
import { AppState } from '../types';

// Reasoning: FilterTasks(F) actions should be dispatched after ActivateWeekOnDay(A) actions
// because (A) reaches at reducer synchrously and observable middleware map (A) to (F) later
// don't know the mechinism under the hood though
// actions in, actions out
export const refreshFilterItemsEpic: Epic<AppAction, FilterTasks> =
  (action$: ActionsObservable<AppAction>, state$: StateObservable<AppState>) => action$.pipe(
    filter(action => action.type === ACTIVATE_WEEK_ON_DAY),
    // ! ofType() causes weird runtime error
    // ofType(ACTIVATE_WEEK_ON_DAY), 
    map((action: ActivateWeekOnDay) => {
      const { activeWeekSlice, allTaskListSlice } = state$.value;
      const { day } = action;
      const week = activeWeekSlice[day];
      const source = allTaskListSlice[day][week];
      return filterTasksWithSource(day, source);
    })
  )
