import { connect, Dispatch } from 'react-redux';
import * as actions from "../actions";
import TaskListSwitchBoard, { Props } from '../components/TaskListSwitchBoard/TaskListSwitchBoard';
import { AppState, PrevCurNextKey } from '../types';

export function mapStateToProps(state: AppState, ownProps: Props) {
    const { activeDaySlice, activeWeekSlice, allTaskListSlice } = state;
    const { day } = ownProps;
    const taskListOfWeeks = allTaskListSlice[day];
    const activeWeek = activeWeekSlice[day];
    
    return {
        day,
        activeWeek,
        taskListOfWeeks,
        currentTime: activeDaySlice.currentTime
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ActivateWeekOnDay>,
    ownProps: Props) {
    const { day } = ownProps;
    return {
        onWeekChange: (week: PrevCurNextKey) => dispatch(actions.setActiveWeekOnDay(day, week))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListSwitchBoard);
