import { DAY } from '../../constants/index';
import * as React from 'react';
import { WEEK_DAYS } from '../../constants/index';

export interface Props {
    currentTime: Date;
    day: DAY;
    isActive: boolean
}

class DayCard extends React.Component<Props> {

    render() {
        const {day, currentTime, isActive} = this.props;
        return (
            <div className="row card-panel">
                <div className=""> {day}, {calculateDate(day, currentTime).toDateString()} </div>
                <div> Content... </div>
                {
                    isActive && <div> Detailed Contents </div>
                }
            </div>
            
        );
    }
}

export default DayCard;

function addDays(date: Date, days: number): Date {
    const newDay = new Date(date);
    newDay.setDate(newDay.getDate() + days);
    return newDay;
} 

// TODO: check implentation
function calculateDate(day: DAY, time: Date): Date {
    const dayNum = WEEK_DAYS[day];
    const calculatedTime = addDays(time, dayNum);
    return calculatedTime;
}