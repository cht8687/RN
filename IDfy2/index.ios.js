/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  Component 
} from 'react-native';
import LoginPage from './LoginPage';

class IDfy2 extends Component {

  render() {
    return (
      <LoginPage />
    );
  }
}

AppRegistry.registerComponent('IDfy2', () => IDfy2);
