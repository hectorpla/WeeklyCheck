import { Dispatch } from 'react-redux';
import { fetchTasks, receiveTasks, TaskLoadAction } from '.';
import { getDay } from '../common';
import * as constants from '../constants'

/*
* actions for fetching news
*/
export interface FetchTasksBatch {
  type: constants.FETCH_TASKS_BATCH;
  grain: constants.TASK_GRAIN;
  startTime: Date; // if week grain, the week for starting at that day
}

export function fetchTasksBatch(
  grain: constants.TASK_GRAIN,
  startTime: Date
) {
  
  // TODO async calls
  return (dispatch: Dispatch<TaskLoadAction>) => {
      // test
      const day = getDay(new Date());
      dispatch(fetchTasks(day, 'cur'));

      return new Promise<void>((resolve) => {
        setTimeout(() => {
          dispatch(receiveTasks(day, 'cur', [{code: 333}]));
          resolve();
        }, 1000);
      });
  }
}
