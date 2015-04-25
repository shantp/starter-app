import 'babel-core/polyfill';
import React from 'react';

const DOM_APP_ID = 'app';

class App extends React.Component {
  render() {
    return (
      <div />
    )
  }
}

React.render(<App />, document.getElementById(DOM_APP_ID));