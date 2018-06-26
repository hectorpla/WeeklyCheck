import { connect, Dispatch } from 'react-redux';
import * as actions from "../actions";
import CardList from "../components/CardList/CardList";
import { DAYS } from "../constants";
import { DayToggleState } from "../types";

export function mapStateToProps({ activeDay, currentTime }: DayToggleState) {
    return {
        activeDay,
        snapshotTime: currentTime
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ToggleAction>) {
    return {
        onActiveDayChange: (day: DAYS) => dispatch(actions.activate(day)),
        onDeactivate: () => dispatch(actions.deactivate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
