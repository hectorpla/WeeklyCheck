import { AppState } from '../types/index';
import { ToggleAction } from '../actions/index';
import { ACTIVATE_DAY, DEACTIVATE } from '../constants/index';

export function appReducer(state: AppState, action: ToggleAction): AppState {
    switch(action.type) {
        case ACTIVATE_DAY: 
            return {...state, activeDay: action.day};
        case DEACTIVATE:
            return {...state, activeDay: undefined};
    }
    return state;
}