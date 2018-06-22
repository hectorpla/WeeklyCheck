import * as React from 'react';

import DayCard from '../DayCard/DayCard';

import { WEEK_DAY_ARRAY, DAY } from '../../constants/index';

export interface Props {
    activeDay: DAY | void;
    snapshotTime: Date;
    onActiveDayChange: (day: DAY) => void;
    onDeactivate: () => void;
}

function CardList({ snapshotTime, activeDay }: Props) {
    return (
      <div className="container">
        {WEEK_DAY_ARRAY.map(day => {
          return (
            <React.Fragment>
              <DayCard currentTime={snapshotTime} day={day}
                isActive={!!activeDay && day === activeDay} />
            </React.Fragment>
          )
        })}
      </div>
    );
}

export default CardList;
