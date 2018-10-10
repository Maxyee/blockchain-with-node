import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';

import Login from './../component/Login';
import Secured from './../component/Secured';
import ManageKeyboardLayout from './ManageKeyboardLayout';



export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
  }
  state = {
    isLoggedIn: false
  }

  render() {
    
    if (this.state.isLoggedIn) {
      return (
        <Secured nav={this.props.navigation}/>
      );
    }
    else {
      return (
        <Login onLoginPress={() => this.setState({ isLoggedIn: true })} pageChange={this.props.navigation}/>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
