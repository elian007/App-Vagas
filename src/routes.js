import { 
    createAppContainer, 
    createSwitchNavigator
  } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import React from 'react'
import Icon from 'react-native-vector-icons';

import DetailScreen , {DetailNavigation} from './screens/DetailScreen/DetailScreen'

import VacancieScreen, { VacancieNavigation } from './screens/VacancieScreen/VacancieScreen'
import RegisterScreen, { RegisterNavigation } from './screens/RegisterScreen/RegisterScreen'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import LoginCompanyScreen, { LoginCompanyNavigation } from './screens/LoginCompanyScreen/LoginCompanyScreen'
import UserScreen, { UserScreenNavigation } from './screens/UserScreen/UserScreen'
import AboutScreen, { AboutNavigation } from './screens/AboutScreen/AboutScreen'
import RegisterVacancie, { RegisterVacancieNavigation } from './screens/RegisterVacancie/RegisterVacancie'
import ListVacancie, { ListVacancieNavigation } from './screens/ListVacancie/ListVacancie'
import HomeCompany, { HomeCompanyNavigation } from './screens/HomeCompany/HomeCompany'
import UpdateVacancie, { UpdateVacancieNavigation } from './screens/UpdateVacancie/UpdateVacancie'



const startStack = createStackNavigator({
   HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {header: null}
   },
   
   RegisterVacancie: {
    screen: RegisterVacancie,
    navigationOptions: RegisterVacancieNavigation
   },
   ListVacancie: {
    screen: ListVacancie,
    navigationOptions: ListVacancieNavigation
   },
   UserScreen: {
    screen: UserScreen,
    navigationOptions: UserScreenNavigation
   },
   AboutScreen: {
    screen: AboutScreen,
    navigationOptions: AboutNavigation
   },
  LoginCompanyScreen: {
    screen: LoginCompanyScreen,
    navigationOptions: LoginCompanyNavigation
  },
  VacancieScreen: {
    screen: VacancieScreen,
    navigationOptions: VacancieNavigation
  },
  UpdateVacancie: {
    screen: UpdateVacancie,
    navigationOptions: UpdateVacancieNavigation
  },
  HomeCompany: {
    screen: HomeCompany,
    navigationOptions: {header: null}
   },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: RegisterNavigation
  },
  DetailScreen: {
    screen: DetailScreen,
    navigationOptions: ({navigation}) => {
       
      return {
        title: navigation.state.params.vaga,
        headerStyle: {
          backgroundColor: theme.primaryColor,
          elevation: 1,
          borderBottonColor: theme.borderBotton
        },
        headerTintColor: theme.light,
        headerTitleStyle: { 
          color: theme.light,
          fontSize: 28
        }
      }
    }
  },
 
});

const AppNavigator = createSwitchNavigator({
  HomeScreen,
  startStack,
 
  
});

export default Routes = createAppContainer(AppNavigator);