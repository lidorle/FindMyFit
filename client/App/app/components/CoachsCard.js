import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View
  } from 'react-native';
  import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
  
  export default class CoachsCard extends Component{
      constructor(props){
          super(props);
      }
      render(){
        {console.log(this.props)}
          return(
     
              <Card>
                <CardItem>
                  <Body>
                    <Text>Name:{this.props.coach.name}</Text>
                    <Text>specialitation:{this.props.coach.specialitation}</Text>
                    <Text>city:{this.props.coach.city}</Text>
                    <Text>price:{this.props.coach.price}</Text>
                    <Text>experience:{this.props.coach.experience}</Text>
                  </Body>
                </CardItem>
              </Card>

              
          );
      }
  }
