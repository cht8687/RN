/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component
} = React;

const LoginPage = require('./LoginPage');

class IDfy2 extends Component {

  render() {
    return (
      <LoginPage />
    );
  }
}

AppRegistry.registerComponent('IDfy2', () => IDfy2);
