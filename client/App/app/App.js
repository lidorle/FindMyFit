/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flowx
 */
// debug - http://localhost:8081/debugger-ui/

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import ViewContainer from './components/ViewContainer'
import Login from './scenes/Authentication/Login'
import Register from './scenes/Authentication/Register'
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      // <Login />
      <Register/>
      
    );
  }
}
