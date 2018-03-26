import React, { Component } from 'react';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';
import {Slider} from 'react-native';

  export default class SearchFacilities extends Component{
      constructor(props){
          super(props);
          this.state={
              check:false,
              Radius:0,
              GymCheckBox:false,
              PoolCheckBox:false,
              parksCheckBox:false,
              streetWorkOut:false

          }


      }


      async _onSearchClick(){
          
        let response = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=31.783705,%2034.648394&radius=4000&type=gym&key=AIzaSyB0uXi4RwJPIyzwMxFBm3PHTL3cTtyDUA4', {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }

          });

          let res = await response.json();
          console.log(res.results);  

    }
      render(){
          return(

              <Container>
                  <Header />

                  <Content>
                  <Body><Text>Radius</Text></Body>
                  <Slider maximumValue={10}
                   minimumValue={0}
                    step={5}
                    value={this.state.Radius}
                    maximumTrackTintColor={'blue'}
                    thumbTintColor={'red'}
                    onValueChange={val=>{this.setState({Radius:val})}}/>
                    
                    <Text>{this.state.Radius}</Text>
                      <ListItem>
                          <CheckBox checked={this.state.GymCheckBox}
                              onPress={() => { this.setState({ GymCheckBox: !this.state.GymCheckBox }) }} />
                          <Body>
                              <Text>GYM</Text>
                          </Body>
                      </ListItem>
                      <ListItem>
                          <CheckBox checked={this.state.PoolCheckBox}
                              onPress={() => { this.setState({ PoolCheckBox: !this.state.PoolCheckBox }) }} />
                          <Body>
                              <Text>Pools</Text>
                          </Body>
                      </ListItem>
                      <ListItem>
                          <CheckBox checked={this.state.parksCheckBox}
                              onPress={() => { this.setState({ parksCheckBox: !this.state.parksCheckBox }) }} />
                          <Body>
                              <Text>Parks</Text>
                          </Body>
                      </ListItem>
                      <ListItem>
                          <CheckBox checked={this.state.streetWorkOut}
                              onPress={() => { this.setState({ streetWorkOut: !this.state.streetWorkOut }) }} />
                          <Body>
                              <Text>Street workout</Text>
                          </Body>
                      </ListItem>
                  </Content>
              </Container>
              
            //   <View>

                //   <Text>רדיוס החיפוש</Text>

                //   <Slider maximumValue={10}
                //    minimumValue={0}
                //     step={5}
                //     value={this.state.Radius}
                //     onValueChange={val=>{this.setState({Radius:val})}}/>

            //         <Text>{this.state.Radius}</Text>

            //         <Text>חדרי כושר</Text>
            //         <CheckBox value={this.state.GymCheckBox} 
            //         onChange={()=>{this.setState({GymCheckBox:!this.state.GymCheckBox})}}/>

            //         <Text>פארקים</Text>
            //         <CheckBox value={this.state.parksCheckBox} 
            //         onChange={()=>{this.setState({parksCheckBox:!this.state.parksCheckBox})}}/>

            //         <Text>בריכות שחייה</Text>
            //         <CheckBox value={this.state.PoolCheckBox} 
            //         onChange={()=>{this.setState({PoolCheckBox:!this.state.PoolCheckBox})}}/>

            //         <Text>מתקני כושר בחוץ</Text>
            //         <CheckBox value={this.state.streetWorkOut} 
            //         onChange={()=>{this.setState({streetWorkOut:!this.state.streetWorkOut})}}/>
                    

            //         <TouchableOpacity onPress={()=>this._onSearchClick()}>
            //         <Text>חפש</Text>
            //         </TouchableOpacity>

            //   </View>
          );
      }
  }
