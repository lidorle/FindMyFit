import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    
  } from 'react-native';
  import {Container,Content,Header} from 'native-base'
  import CoachsCard from '../../components/CoachsCard'
  
  export default class CoachsResult extends Component{
      constructor(props){
          super(props);
          this.state={
            Coaches:[]
          }

      }

     componentWillMount(){
         const data = this.props.navigation.state.params.result;
       
         const Coaches = Object.keys(data).map(i => {
            return data[i] 
        });
        console.log('c',Coaches);
        this.setState({Coaches:Coaches})

  
       

        
      }
      render(){
          return(
            <Container>
            <Header />
            <Content>
              <FlatList data={this.state.Coaches}
              renderItem={({item}) => <CoachsCard coach={item}/>}
              />
            </Content>
            </Container>
            
              
          );
      }
  }
