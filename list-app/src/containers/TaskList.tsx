import * as Debug from 'debug';
import { connect, Dispatch } from 'react-redux';
import * as actions from "../actions";
import TaskList, { Props } from '../components/TaskList/TaskList';
import { AppState, Task } from '../types';

const debugNamespace = 'container:TaskList';
const debug = Debug(debugNamespace);

// TODO: refactor to reflect the filtered items
function mapStateToProps(state: AppState, ownProps: Props): Props {
  const { activeDay } = state.activeDaySlice;
  const allTaskLists = state.allTaskListSlice;
  const { fileredLists } = state.filterSlice;

  const { day, week } = ownProps;
  const tasks = allTaskLists[day][week];
  
  debug(state);
  return {
    ...ownProps,
    tasks,
    filteredTasks: fileredLists[day],
    isCardActive: activeDay === day
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
