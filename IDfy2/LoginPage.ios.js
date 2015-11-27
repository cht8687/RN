'use strict';

const React = require('react-native');
const {
  AsyncStorage,
  Image,
  StyleSheet,
  Text,
  View,
} = React;

const LoginPage = React.createClass({
  getInitialState: function() {
    return ({
      theme: null,
    });
  },
  
  render: function() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo}
          source={require('image!infotrack-logo')} />
      </View>
    );
  }

});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#F5FCFF'
  },
  logo: {
    
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = LoginPage;
