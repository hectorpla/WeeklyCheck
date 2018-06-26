import { ActivateWeekOnDay } from '../actions/index';
import { ACTIVATE_WEEK_ON_DAY } from '../constants';
import { ActiveWeekOnDays, PrevCurNextKey } from '../types/index';

function createInitState() {
    return {
        Monday: createInitActiveWeek(),
        Tuesday: createInitActiveWeek(),
        Wednesday: createInitActiveWeek(),
        Thursday: createInitActiveWeek(),
        Friday: createInitActiveWeek(),
        Saturday: createInitActiveWeek(),
        Sunday: createInitActiveWeek()
    }
}

function createInitActiveWeek(): PrevCurNextKey {
    return 'cur';
}

export function dayCardWeekActivationReducer(state: ActiveWeekOnDays = createInitState(),
    action: ActivateWeekOnDay): ActiveWeekOnDays {
    const { day, activeWeek } = action;
    // alert(action.type);
    switch (action.type) {
        case ACTIVATE_WEEK_ON_DAY:
            return {
                ...state,
                [day]: activeWeek
            }
    }
    // if (action.type)
    //   throw Error("unexpected behavior");
    return state;
}