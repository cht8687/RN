'use strict';

const React = require('react-native');
const {
  AsyncStorage,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput
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
        <TextInput style={styles.input} 
          placeholder="Username"
        />
        <TextInput style={styles.input} 
          placeholder="Password"
        />
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
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth:1
  }
});

module.exports = LoginPage;
