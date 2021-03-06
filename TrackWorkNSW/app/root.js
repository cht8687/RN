'use strict'

import {
  StatusBarIOS,
  Platform
} from 'react-native';
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import logger from './middleware/logger';
import thunk from 'redux-thunk';
import App from './containers/App';

const createStoreWithMW = applyMiddleware(logger, thunk)(createStore);
const store = createStoreWithMW(reducers);

export default class Root extends Component {

  componentDidMount () {
    if (Platform.OS === 'ios') {
      StatusBarIOS.setHidden(true)
    }
  }

  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
