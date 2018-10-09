import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';


import Secured from './component/Secured';
import PublicPhotoPage from './component/PublicPhotoPage';
import LoginScreen from './screens/LoginScreen';
import FeedScreen from './screens/FeedScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}


const AppStackNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen
  },
  PublicPhotoPage: {
    screen: PublicPhotoPage
  },
  Secured: {
    screen: Secured
  },
  FeedScreen: {
    screen: FeedScreen
  }

})


