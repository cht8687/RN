'use strict'

import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import React, { Component, PropTypes } from 'react';
import {
  Scene,
  Router
} from 'react-native-router-flux';
import Tabbar from '../components/Tabbar';

export default class App extends Component {

  constructor (props) {
    super(props);
  }

  render() {

    return (
      <Router>
        <Scene key="Tabbar" component={Tabbar} title="Live Info" initial />
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
