import * as React from 'react';

import DayCard from '../DayCard/DayCard';

import { DAY, WEEK_DAY_ARRAY } from '../../constants/index';

export interface Props {
    activeDay: DAY | void;
    snapshotTime: Date;
    onActiveDayChange: (day: DAY) => void;
    onDeactivate: () => void;
}

function CardList({ snapshotTime, activeDay, onActiveDayChange, 
  onDeactivate }: Props) {
    
    return (
      <div className="container">
        {WEEK_DAY_ARRAY.map(day => {
          function handleClick(event: React.MouseEvent<HTMLDivElement>) {
            if (day === activeDay) {
              onDeactivate();
            } else {
              onActiveDayChange(day);
            }
          }
          return (
            <div className="hoverable" key={day} onClick={handleClick}>
              <DayCard currentTime={snapshotTime} day={day}
                isActive={!!activeDay && day === activeDay} />
            </div>
          )
        })}
      </div>
    );
}

export default CardList;
