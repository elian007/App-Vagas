import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import LoginInternScreen from '../LoginInternScreen/LoginInternScreen';
import LoginCompanyScreen from '../LoginCompanyScreen/LoginCompanyScreen'

export default class HomeScreen extends Component {
  render() {
   <Header>
     <LoginCompanyScreen />
     <LoginInternScreen />
   </Header>
}
}