/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

const React = require('react-native');
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;
const LoginPage = require('./LoginPage');


const IDfy2 = React.createClass({
  render: function() {
    return (
      <LoginPage />
    );
  }
});  

AppRegistry.registerComponent('IDfy2', () => IDfy2);
