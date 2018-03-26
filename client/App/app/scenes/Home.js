import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,

    View,
    TouchableOpacity
  } from 'react-native';

  import { Button,Container,Text} from 'native-base';

  export default class Home extends Component{
      constructor(props){
          super(props)
      }

      render(){
          {console.log('hommmee',this.navigate);}
          return(
              <Container style={styles.viewContainer}>


                <Button 
                onPress={()=>{this.props.navigation.navigate('Map')}}
                style={styles.button}>
                   <Text>Map</Text>
                </Button>
                <Button 
                onPress={()=>{this.props.navigation.navigate('Register')}}
                style={styles.button}>
                   <Text>register</Text>
                </Button>

                <Button 
                onPress={()=>{this.props.navigation.navigate('SearchCoachs',{'navigate':this.props.navigate})}}
                tyle={styles.button}>
                   <Text>SEARCH COACHS</Text>
                </Button>

                <Button 
                onPress={()=>{this.props.navigation.navigate('SearchFacilities')}}
                style={styles.button}>
                   <Text>SEARCH FACILTIES</Text>
                </Button>
                <Button 
                onPress={()=>{this.props.navigation.navigate('UserType')}}
                style={styles.button}>
                   <Text>COACH REGISTER</Text>
                </Button>
                <Button 
                onPress={()=>{this.props.navigation.navigate('CoachsCard')}}
                style={styles.button}>
                   <Text>Coachs Card</Text>
                </Button>

              </Container>
              
          );
      }
  }

  const styles = StyleSheet.create({
      viewContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap:'wrap',
        paddingTop:200,
      },
      button:{
          marginLeft:10,
          marginTop:10,
          paddingRight:10,
          
      }
  });