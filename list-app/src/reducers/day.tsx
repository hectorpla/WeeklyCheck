import { ToggleAction } from '../actions/index';
import { ACTIVATE_DAY, DEACTIVATE } from '../constants/index';
import { DayToggleState } from '../types/index';

export function dayActivationReducer(state: DayToggleState, action: ToggleAction): DayToggleState {
    switch(action.type) {
        case ACTIVATE_DAY: 
            return {...state, activeDay: action.day};
        case DEACTIVATE:
            return {...state, activeDay: undefined};
    }
    return state;
}