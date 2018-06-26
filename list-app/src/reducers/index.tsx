import { dayActivationReducer } from './day';
import { taskReducer, TaskReducer,  } from './task';
import { combineReducers } from 'redux';
import { DAYS, WEEK_DAY_ARRAY , WEEK_DAYS,} from '../constants';
import { DailyTaskList } from '../types';
import { TaskAction } from '../actions';
import { dayCardWeekActivationReducer } from './activeWeek';

function taskReduerWithDay(day: DAYS): TaskReducer {
    return (state: DailyTaskList, action: TaskAction) => {
        // TODO: check implementation
        if (action.day !== day) return state;
        return taskReducer(state, action);
    }
}

// function taskReducerMultiplex(day: DAYS, week: WeekActiveOnCard) {
//     return (state: DailyTaskList, action: 
// }


// flatten out the task reducers
export default combineReducers({
    activeDay: dayActivationReducer,
    activeWeek: dayCardWeekActivationReducer
});

// due to the nature of combineRed
// TODO: shared states between sliced recuder:
// dayCardWeekActivationReducer and TaskReducer
// when updating a single task list, the list should know the activated week
