import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';


var Login = require('./Login');
var AuthService = require('./AuthService');

var GitProject = React.createClass({
  componentDidMount: function(){
      AuthService.getAuthInfo((err, authInfo)=> {
        this.setState({
          checkingAuth: false,
          isLoggedIn: authInfo != null
        })
      });
  },

  render: function(){
    if(this.state.checkingAuth){
        return(
          <View style={styles.container}>
            <ActivityIndicator
              animating={true}
              size="large"
              style={styles.loader} />
          </View>
        );
    }

    if(this.state.isLoggedIn){
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Logged In</Text>
        </View>
      );
    }else{
      return (
        <Login onLogin={this.onLogin} />
      );
    }
  },
  onLogin: function(){
    this.setState({isLoggedIn: true});
  },
  getInitialState: function(){
    return {
      isLoggedIn: false,
      checkingAuth: true
    }
  }
});

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        padding: 10
  },
    welcome: {
        fontSize: 30,
        marginTop: 10
    }
});

AppRegistry.registerComponent('GitProject', () => GitProject);
