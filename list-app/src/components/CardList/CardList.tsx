import * as React from 'react';

import DayCard from '../DayCard/DayCard';

import { DAYS, WEEK_DAY_ARRAY } from '../../constants/index';
import { ActiveWeekOnDays } from '../../types';

export interface Props {
  activeDay: DAYS | void;
  snapshotTime: Date;
  activeWeeks: ActiveWeekOnDays;
  onActiveDayChange: (day: DAYS) => void;
  onDeactivate: () => void;
}

// TODO: add a top level handler to refresh the time
// mind the change of active day
function CardList({ snapshotTime, activeDay, activeWeeks,
  onActiveDayChange, onDeactivate }: Props) {

  return (
    <div className="container">
      {WEEK_DAY_ARRAY.map(day => {
        // handle toggle day
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
              isActive={!!activeDay && day === activeDay}
              activeWeek={activeWeeks[day]}
            />
          </div>
        )
      })}
    </div>
  );
}

export default CardList;
