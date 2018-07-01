import { ToggleAction } from '../actions/index';
import { getDay } from '../common';
import { ACTIVATE_DAY, DEACTIVATE } from '../constants/index';
import { DayToggleState } from '../types/index';

function createInitState() {
    const currentTime = new Date();
    return {
        activeDay: getDay(currentTime),
        currentTime
    }
}

export function dayActivationReducer(state: DayToggleState = createInitState(),
    action: ToggleAction): DayToggleState {
    switch (action.type) {
        case ACTIVATE_DAY:
            return { ...state, activeDay: action.day };
        case DEACTIVATE:
            return { ...state, activeDay: undefined };
    }
    return state;
}