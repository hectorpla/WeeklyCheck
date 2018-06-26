import { connect, Dispatch } from 'react-redux';
import * as actions from "../actions";
import { ActiveWeekOnDays, PrevCurNextKey } from '../types';
import TaskListSwitchBoard, { Props } from '../components/TaskListSwitchBoard/TaskListSwitchBoard';

export function mapStateToProps(week: ActiveWeekOnDays, ownProps: Props) {
    return {
        ...ownProps,
        activeWeek: week[ownProps.day]
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ActivateWeekOnDay>,
        ownProps: Props) {
    const { day } = ownProps;
    return {
        onWeekChange: (week: PrevCurNextKey) => actions.setActiveWeekOnDay(day, week)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListSwitchBoard);
