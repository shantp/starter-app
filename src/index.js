import 'babel-core/polyfill';
import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';
import {DevTools} from 'redux-devtools/lib/react';
import SliderMonitor from 'redux-slider-monitor';

const store = configureStore();

React.render(
  <div>
    <Provider store={store}>
      {() => <App />}
    </Provider>
    <DevTools store={store} monitor={SliderMonitor} />
  </div>,
  document.getElementById('root')
);
