import { AppState } from "../types";
import CardList from "../components/CardList/CardList";
import * as actions from "../actions";
import { DAY } from "../constants";
import { connect, Dispatch } from 'react-redux';


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
