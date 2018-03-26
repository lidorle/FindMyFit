import React, { Component } from 'react';
import { Container,Button, Header, Content, Form, Item, Input } from 'native-base';

import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
  
  export default class TraineerRegister extends Component{
    constructor(props){
      super(props);
     const navigation = this.props.navigation;

      this.state={
          name:'',
          gender:'',
          address:'',
          certificates:'',
          phone:'',
          limitation:'',
          navigation: navigation 
         
      }
      this._onPressRegister = this._onPressRegister.bind(this);

   
  }
  async _onPressRegister() {
    
    console.log('state:',this.state)
    try {
        let response = fetch('http://10.0.2.2:3000/trainers/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Name: this.state.name,
                Gender: this.state.gender,
                Address: this.state.address,
                Certificates: this.state.certificates,
                Phone:this.state.phone,
            }),
        });
        let res = await response.text();

        if(res.status>=200 && res.status <300){
            console.log("res success is:" +res);
        }
        else{
          let errors =res;
          throw errors;
        }

    } catch (error) {
      console.dir(error);
      
    }
}
      render(){
          return(
            <Container>
            <Header />
            <Content>
              <Form>
                <Item>
                  <Input onChangeText={(text)=>this.setState({name:text})}
                         placeholder="Name" />
                </Item>
                <Item>
                  <Input onChangeText={(text)=>this.setState({gender:text})} 
                         placeholder="Gender" />
                </Item>
                <Item>
                  <Input onChangeText={(text)=>this.setState({address:text})} 
                         placeholder="Address" />
                </Item>
                <Item>
                  <Input onChangeText={(text)=>this.setState({certificates:text})} 
                         placeholder="certificates" />
                </Item>
                <Item last>
                  <Input onChangeText={(text)=>this.setState({phone:text})} 
                         placeholder="Phone Number" />
                </Item>
        
                <Button onPress={this._onPressRegister}>
                  <Text>Register </Text>
                </Button>
              </Form>
            </Content>
          </Container>
              
          );
      }
  }
