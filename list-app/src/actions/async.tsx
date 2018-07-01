import { Dispatch } from 'react-redux';
import { fetchTasks, receiveTasks, TaskLoadAction } from '.';
import { WeekTasks } from '../apis';
import { getDay } from '../common';
import * as constants from '../constants';
import { fakeFetchWeekTasks } from '../mock/mockFetch';

export function fetchTasksBatch(
  grain: constants.TASK_GRAIN,
  startTime: Date
) {
  
  // TODO async calls
  return (dispatch: Dispatch<TaskLoadAction>) => {
      // test
      const day = getDay(new Date());
      dispatch(fetchTasks(day, 'cur'));

      return fakeFetchWeekTasks(constants.TASK_GRAIN.DAY, startTime)
              .then((weekTasks: WeekTasks) => {
                for (const key of constants.WEEK_DAY_ARRAY) {
                  const list = weekTasks[key];
                  dispatch(receiveTasks(key, 'cur', list));
                }
              });
  }
}
