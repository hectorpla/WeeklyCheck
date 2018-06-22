import { connect, Dispatch } from 'react-redux';
import * as actions from "../actions";
import CardList from "../components/CardList/CardList";
import { DAY } from "../constants";
import { AppState } from "../types";


export function mapStateToProps({ activeDay, currentTime }: AppState){
    return {
        activeDay,
        snapshotTime: currentTime
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ToggleAction>) {
    return {
        onActiveDayChange: (day: DAY) => dispatch(actions.activate(day)),
        onDeactivate: () => dispatch(actions.deactivate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
