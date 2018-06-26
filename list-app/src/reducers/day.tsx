import { ToggleAction } from '../actions/index';
import { ACTIVATE_DAY, DEACTIVATE, WEEK_DAY_ARRAY } from '../constants/index';
import { DayToggleState } from '../types/index';

function createInitState() {
    return {
        activeDay: WEEK_DAY_ARRAY[new Date().getDay()],
        currentTime: new Date()
    }
}

export function dayActivationReducer(state: DayToggleState = createInitState(), 
        action: ToggleAction): DayToggleState {
    switch(action.type) {
        case ACTIVATE_DAY: 
            return {...state, activeDay: action.day};
        case DEACTIVATE:
            return {...state, activeDay: undefined};
    }
    return state;
}