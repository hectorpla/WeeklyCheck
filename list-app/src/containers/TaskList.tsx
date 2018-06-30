import { connect, Dispatch } from 'react-redux';
import * as actions from "../actions";
import TaskList, { Props } from '../components/TaskList/TaskList';
import { AppState, Task } from '../types';

function mapStateToProps(state: AppState, ownProps: Props) {
  const allTaskLists = state.allTaskListSlice;
  const { day, week, editable } = ownProps;
  const tasks = allTaskLists[day][week];
  return {
    day,
    week,
    tasks,
    editable
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.TaskAction>,
  ownProps: Props) {
  const { day, week } = ownProps;
  return {
    deleteTask: (index: number) => dispatch(actions.removeTask(index, day, week)),
    addTask: (task: Task) => dispatch(actions.addTask(task, day, week))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
