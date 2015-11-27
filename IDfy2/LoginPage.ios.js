'use strict';

const React = require('react-native');
const {
  AsyncStorage,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
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
          secureTextEntry="true"
        />
        <TouchableHighlight
          style={styles.loginbutton}
          >
          <Text
            style={styles.loginText}> 
              Login in
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#F5FCFF',
    padding: 10
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
  },
  loginbutton: {
    height: 50,
    backgroundColor: '#E76934',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 10
  },
  loginText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  }
});

module.exports = LoginPage;
