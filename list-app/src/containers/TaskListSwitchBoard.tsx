import { connect, Dispatch } from 'react-redux';
import * as actions from "../actions";
import TaskListSwitchBoard, { Props } from '../components/TaskListSwitchBoard/TaskListSwitchBoard';
import { AppState, PrevCurNextKey } from '../types';

export function mapStateToProps(state: AppState, ownProps: Props) {
    const { activeDaySlice, activeWeekSlice, allTaskListSlice } = state;
    const { day } = ownProps;
    const { currentTime, activeDay } = activeDaySlice;
    const taskListOfWeeks = allTaskListSlice[day];
    const activeWeek = activeWeekSlice[day];
    
    return {
        day,
        activeWeek,
        taskListOfWeeks,
        currentTime,
        isCardActive: activeDay === day
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ActivateWeekOnDay>,
    ownProps: Props) {
    const { day } = ownProps;
    return {
        // TODO: should dispatch filter action in addtion
        onWeekChange: (week: PrevCurNextKey) => dispatch(actions.setActiveWeekOnDay(day, week))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListSwitchBoard);
