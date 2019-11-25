import { 
    createAppContainer, 
    createSwitchNavigator
  } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import DetailScreen , {DetailNavigation} from './screens/DetailScreen/DetailScreen'

import VacancieScreen, { VacancieNavigation } from './screens/VacancieScreen/VacancieScreen'
import RegisterScreen, { RegisterNavigation } from './screens/RegisterScreen/RegisterScreen'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import LoginInternScreen, { LoginInternNavigation } from './screens/LoginInternScreen/LoginInternScreen'
import LoginCompanyScreen, { LoginCompanyNavigation } from './screens/LoginCompanyScreen/LoginCompanyScreen'
import { createBottomTabNavigator, createTabNavigator } from 'react-navigation-tabs'

const tabs = createBottomTabNavigator({
  LoginInternScreen: {
    screen: LoginInternScreen,
    navigationOptions: LoginInternNavigation
  },
  LoginCompanyScreen: {
    screen: LoginCompanyScreen,
    navigationOptions: LoginCompanyNavigation
  }

})



const startStack = createStackNavigator({
   
    LoginInternScreen: {
    screen: LoginInternScreen,
  },
  LoginCompanyScreen: {
    screen: LoginCompanyScreen,
  },
  VacancieScreen: {
    screen: VacancieScreen,
    navigationOptions: VacancieNavigation
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: RegisterNavigation
  },
  DetailScreen: {
    screen: DetailScreen,
    navigationOptions: DetailNavigation
  },
});

const AppNavigator = createSwitchNavigator({
  tabs,
  startStack,
  
});

export default Routes = createAppContainer(AppNavigator);