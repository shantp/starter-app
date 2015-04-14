import 'babel-core/polyfill';
import React from 'react';

const DOM_APP_ID = 'app';

class TwitchEmoticons extends React.Component {
  render() {
    return (
      <div />
    )
  }
}

React.render(<TwitchEmoticons />, document.getElementById(DOM_APP_ID));