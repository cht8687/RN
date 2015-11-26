/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS,
} = React;

var HomePage = require('./HomePage');
var _navigator;

var IDfy2 = React.createClass({


  RouteMapper: function(route, navigationOperations, onComponentRef) {
    _navigator = navigationOperations;
    if (route.name === 'home') {
      return (
        <View style={styles.container}>
          <HomePage navigator={navigationOperations}/>
        </View>
      );
    } 
  },


  render: function() {

    var initialRoute = {name: 'home'};

    return (
      <Navigator
        style={styles.container}
        initialRoute={initialRoute}
        renderScene={this.RouteMapper}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('IDfy2', () => IDfy2);
