import { dayActivationReducer } from './day';
import { taskReducer, TaskReducer } from './task';
import { combineReducers } from 'redux';
import { DAYS, WEEK_DAY_ARRAY } from '../constants';
import { DailyTaskList } from '../types';
import { TaskAction } from '../actions';

function taskRedcuerWithDay(day: DAYS): TaskReducer {
    return (state: DailyTaskList, action: TaskAction) => {
        // TODO: check implementation
        if (action.day !== day) return state;
        return taskReducer(state, action);
    }
}

// not very elegant
const taskReducers = {};
WEEK_DAY_ARRAY.forEach(day => {
    taskReducer[day] = taskRedcuerWithDay(day);
});


// TODO: combine reducers
// flatten out the task reducers
export default combineReducers({dayActivationReducer, ...taskReducers})
