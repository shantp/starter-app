import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Toggle from './components/Toggle';
import * as ActionCreators from './actions/toggle';

function mapStateToProps(state) {
  return {
    active: state.toggle,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
