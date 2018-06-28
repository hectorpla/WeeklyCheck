import { ActivateWeekOnDay } from '../actions/index';
import { getEditableWeek } from '../common';
import { ACTIVATE_WEEK_ON_DAY, DAYS } from '../constants';
import { ActiveWeekOnDays, PrevCurNextKey } from '../types/index';

function createInitState(): ActiveWeekOnDays {
    function createInitActiveWeek(day: DAYS): PrevCurNextKey {
        return getEditableWeek(day, currentTime);;
    }

    // TODO: mind drift with that in the other slice reducer: day
    const currentTime = new Date();
    // boilerplate
    return {
        Monday: createInitActiveWeek('Monday'),
        Tuesday: createInitActiveWeek('Tuesday'),
        Wednesday: createInitActiveWeek('Wednesday'),
        Thursday: createInitActiveWeek('Thursday'),
        Friday: createInitActiveWeek('Friday'),
        Saturday: createInitActiveWeek('Saturday'),
        Sunday: createInitActiveWeek('Sunday')
    }
}

export function dayCardWeekActivationReducer(state: ActiveWeekOnDays = createInitState(),
    action: ActivateWeekOnDay): ActiveWeekOnDays {
    const { day, activeWeek } = action;
    switch (action.type) {
        case ACTIVATE_WEEK_ON_DAY:
            return {
                ...state,
                [day]: activeWeek
            }
    }
    return state;
}
