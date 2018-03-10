import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  
import MapView from 'react-native-maps';

  export default class Map extends Component{
    
      render(){
          return(
          <View style ={styles.container}>
            <MapView style={styles.map}
            initialRegion={{
              latitude: 31.798875,
              longitude: 34.651587,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
          </View>
          );
      }
  }

  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });