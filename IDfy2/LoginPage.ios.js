'use strict';

import React, { AsyncStorage,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Component,
  ActivityIndicatorIOS
} from 'react-native';

export default class LoginPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showProgress: false
    }
  }
  
  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.logo}
          source={require('image!infotrack-logo')} />
        <TextInput style={styles.inputusername} 
          placeholder="Username"
        />
        <TextInput style={styles.inputpassword} 
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableHighlight
          style={styles.loginbutton}
          onPress={this.onLoginPressed.bind(this)}
          >
          <Text
            style={styles.loginText}> 
              Login in
          </Text>
        </TouchableHighlight>

        <ActivityIndicatorIOS 
          animating={this.state.showProgress}
          size='large'
          style={styles.indicator}
        />

      </View>
    );
  }

  onLoginPressed() {
    this.setState({showProgress: true});

    fetch('https://api.github.com/search/repositories?q=react')
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      console.log(results);
      this.setState({showProgress: false});
    })
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#F5FCFF',
    padding: 20
  },

  logo: {
    
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  inputusername: {
    height: 50,
    marginTop: 30,
    padding: 4,
    fontSize: 18,
    borderWidth:1
  },

  inputpassword: {
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
    marginTop: 30
  },

  loginText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },

  indicator: {
    marginTop: 20
  }

});
