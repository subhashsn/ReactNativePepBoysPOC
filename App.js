/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './components/Login';
import SplashScreen from './components/Splash';
import HomeScreen from './components/Home/Home';
import AutoPartsDetails from './components/Home/AutoPartsDetails'
import CarService from './components/CarService/CarService'

/*
const Application = StackNavigator ({
  Login: { screen: LoginScreen },
  Home: {screen: HomeScreen},
  AutoPartsDetails:{screen: AutoPartsDetails}
}, {
    navigationOptions: {
      //header: false,
      headerStyle: {
        display:'none',
      }
    }
});
*/

const Application = StackNavigator ({
  Login: { screen: LoginScreen },
  Home: {screen: HomeScreen},
  AutoPartsDetails:{screen: AutoPartsDetails},
  CarService:{screen: CarService}
});

export default class App extends Component  {
  render() {
    return (
      <Application/>
    );
  }
}
