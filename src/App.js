import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Tabs from './components/Tabs';
import {newTab, updateTab} from './actions/tabs';
import {getInitialState} from './actions/rejuice';

class App extends React.Component {
  componentWillMount(){
    const session = window.location.href.match(/[?&]session=([^&#]+)\b/);
    if (session) {
      this.props.getInitialState(session[1]);
    }
  }

  render() {
    const {tabs, newTab, updateTab} = this.props;
    console.log(newTab);
    return (
      <div>
        <Tabs
          tabs={tabs}
          newTab={newTab}
          updateTab={updateTab} />
      </div>
    );
  }
}

App.propTypes = {
  tabs: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    tabs: state.tabs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newTab: (tab) => dispatch(newTab(tab)),
    updateTab: (id, tab) => dispatch(updateTab(id, tab)),
    getInitialState: (admin, session) => dispatch(getInitialState(admin, session))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
