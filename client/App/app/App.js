/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flowx
 */
// debug - http://localhost:8081/debugger-ui/
//Api_google_maps : AIzaSyAm4pWOwM3RCPTtEKTIkxrEe4qOQdvVu_M'
//rrr@gmail.com:123
import React, { Component } from 'react';
import { StackNavigator,DrawerNavigator } from 'react-navigation';
import {
  Text,
  View,
  AppRegistry
} from 'react-native';

import ViewContainer from './components/ViewContainer'
import Login from './scenes/Authentication/Login'
import Register from './scenes/Authentication/Register'
import Home from './scenes/Home'
import Root from './components/Root'
import Map from './components/Map'
import SearchFacilities from './scenes/search/searchFacilities'
import UserType from './scenes/UserType'
import CoachRegister from './scenes/Authentication/CoachRegister'
import TraineerRegister from './scenes/Authentication/TraineerRegister'
import SearchCoachs from './scenes/search/searchCoachs'
import CoachsCard from './components/CoachsCard'
import CoachsResult from './scenes/search/CoachsResult'
type Props = {};

const AppNavigator = DrawerNavigator({
  Home:{screen:Home},
  Login:{screen:Login},
  Root:{screen:Root},
  Register:{screen:Register},
  CoachsCard:{screen:CoachsCard},
  Map:{screen:Map},
  SearchFacilities:{screen:SearchFacilities},
  CoachRegister:{screen:CoachRegister},
  TraineerRegister:{screen:TraineerRegister},
  UserType:{screen:UserType},
  SearchCoachs:{screen:SearchCoachs},
  CoachsResult:{screen:CoachsResult}
},
  {
    initalRouteName:'Home',
  }
);

export default class App extends Component<Props> {



  render() {
     
      return( <AppNavigator/>);

  }
}

AppRegistry.registerComponent('App',()=>AppNavigator);