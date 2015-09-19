import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Tabs from './components/Tabs';
import * as ActionCreators from './actions/tabs';

function mapStateToProps(state) {
  return {
    tabs: state.tabs,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);
