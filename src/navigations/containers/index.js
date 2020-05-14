/*
Connect navigation features to state via redux
*/

import ApplicationNavigator from "../navigators";
import {addNavigationHelpers} from "react-navigation";

// state[navigation] to prop form
const mapStateToProps = state => ({
    navigation: state.navigationData
});

const mapDispatchToProps = dispatch => ({dispatch});

class ApplicationNavigatorContainer extends Component {
    render() {
        return (
            <ApplicationNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.navigation
                })}
            />
        );
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(
    ApplicationNavigatorContainer
);
    