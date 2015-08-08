import 'babel-core/polyfill';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div />
    );
  }
}

React.render(<App />, document.getElementById('app'));
