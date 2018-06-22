import { DAY } from '../constants/index';

export interface AppState {
    activeDay: DAY | void;
    currentTime: Date;
}
