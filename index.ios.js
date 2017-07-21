import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


var Login = require('./Login');
var authService = require('./AuthService');

var GitProject = React.createClass({
  render: function(){
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
      isLoggedIn: false
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
