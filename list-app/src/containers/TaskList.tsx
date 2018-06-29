import { connect, Dispatch } from 'react-redux';
import * as actions from "../actions";
import TaskList, { Props } from '../components/TaskList/TaskList';
import { AppState, Task } from '../types';

function mapStateToProps(state: AppState, ownProps: Props) {
  // const { activeDaySlice, activeWeekSlice, allTaskListSlice } = state;
  // const activeDay = activeDaySlice.activeDay;
  // if (activeDay !== ownProps.day) return state;

  // const activeWeek = activeWeekSlice[activeDay];
  const allTaskLists = state.allTaskListSlice;
  const { day, week } = ownProps;
  const list = allTaskLists[day][week];
  if (!list) {
    throw Error("container TaskList: list should not be undefined");
  }
  return {
    day,
    week,
    taskList: list
  }
}

// TODO: why other props are needed here, not needed in SwitchBoard
export function mapDispatchToProps(dispatch: Dispatch<actions.TaskAction>,
  ownProps: Props) {
  const { day, week, taskList } = ownProps;
  return {
    day,
    week,
    taskList,
    deleteTask: (index: number) => dispatch(actions.removeTaskOnDay(index, day, week)),
    addTask: (task: Task) => dispatch(actions.addTaskOnDay(task, day, week))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
