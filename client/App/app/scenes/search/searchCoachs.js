import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Button

} from 'react-native';
import { Container, Icon, Form, Label, Item, Input, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import CoachsCard from '../../components/CoachsCard'

export default class SearchCoachs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      specialitation: '',
      city: '',
      price: '',
      experience: '',
      searchResult:[]
    }
    
    this._SreachPress = this._SreachPress.bind(this);
  }

  async _SreachPress() {
    try {
      let response = await fetch('http://10.0.2.2:3000/coachs/searchCoachs/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          price: this.state.price,
          experience: this.state.experience,
          specialitation: this.state.specialitation,
          city: this.state.city,

        }),
      });
      let res = await response.json();
      this.props.navigation.navigate('CoachsResult',{'result':res})
      console.log('props',this.props);
      
      if (res.status >= 200 && res.status < 300) {
        console.log("res success is:" + res);
        

      }
      else {
        let errors = res;
        throw errors;
      }

    } catch (error) {
      console.dir(error);

    }

  }
  render() {
    return (

      <Container>
        <Header />
        <Content>
          <Card style={styles.card}>
            <CardItem>
              <Body>

                <Item floatingLabel>

                  <Label>Search by Name</Label>
                  <Input
                    onChangeText={(text) => this.setState({ name: text })} >
                  </Input>
                </Item>

                <Item floatingLabel>
                  <Label>Search by specialitation</Label>
                  <Input
                    onChangeText={(text) => {
                      text = text.toUpperCase();
                      this.setState({ specialitation: text })
                    }
                    } >
                  </Input>
                </Item>

                <Item floatingLabel>
                  <Label>Search by city</Label>
                  <Input
                    onChangeText={(text) => this.setState({ city: text })}  >
                  </Input>
                </Item>

                <Item floatingLabel>
                  <Label>Search by price</Label>
                  <Input
                    onChangeText={(text) => this.setState({ price: text })}  >
                  </Input>
                </Item>


                {/* <Item floatingLabel>
                        <Label>Search by Rank</Label>
                        <Input value={this.state} ></Input>
                      </Item> */}

                <Item floatingLabel>
                  <Label>Search by experience</Label>
                  <Input value={this.state.experience}
                    onChangeText={(text) => this.setState({ experience: text })}  >
                  </Input>
                </Item>

              </Body>
            </CardItem>
            <Button onPress={this._SreachPress} style={styles.button} title="Search"></Button>
          </Card>
        </Content>
        
      </Container>

    );
  }
}
const styles = StyleSheet.create({
  card: {
    height: 500
  },
  button: {
    marginTop: 20
  }
})