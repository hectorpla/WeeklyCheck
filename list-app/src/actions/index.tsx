import * as constants from '../constants/index';

export interface ActivateDay {
    type: constants.ACTIVATE_DAY // define the type of type
    day: constants.DAY 
}

export interface Deactivate {
    type: constants.DEACTIVATE
}

export type ToggleAction = ActivateDay | Deactivate;

export function activate(day: constants.DAY): ActivateDay {
    return {
        day,
        type: constants.ACTIVATE_DAY, // assign the value of type
    }
}

export function deactivate(): Deactivate {
    return {
        type: constants.DEACTIVATE
    }
}