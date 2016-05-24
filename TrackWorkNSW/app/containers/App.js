'use strict'

import React, {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { Component, PropTypes } from 'react';
import {
  Router,
  Route,
  Schema
} from 'react-native-router-flux';
import Tabbar from '../components/Tabbar';

export default class App extends Component {

  constructor (props) {
    super(props);
  }

  render() {

    return (

      // Now has router
      <Router hideNavBar={false}>
        <Route name="Tabbar" schema="default" component={Tabbar} title="Live Info" initial />
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
