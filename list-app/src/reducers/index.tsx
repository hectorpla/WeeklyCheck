import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import { DailyTaskList } from '../types';
// import { TaskAction } from '../actions';
import { dayCardWeekActivationReducer } from './activeWeek';
import { dayActivationReducer } from './day';
import { taskListFilter } from './search';
import { taskMultiplexReducer  } from './task';

// Higer order reducer
// function taskReduerWithDay(day: DAYS): TaskReducer {
//     return (state: DailyTaskList, action: TaskAction) => {
//         // TODO: check implementation
//         if (action.day !== day) return state;
//         return taskReducer(state, action);
//     }
// }


// TODO: flatten out the task reducers? currently managed in AppState
export default combineReducers({
    activeDaySlice: dayActivationReducer,
    activeWeekSlice: dayCardWeekActivationReducer,
    allTaskListSlice: taskMultiplexReducer,
    filterSlice: taskListFilter,
    form: formReducer,
});

