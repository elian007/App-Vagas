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
import UserScreen, { UserNavigation } from './screens/UserScreen/UserScreen'
import AboutScreen, { AboutNavigation } from './screens/AboutScreen/AboutScreen'
import RegisterVacancie, { RegisterVacancieNavigation } from './screens/RegisterVacancie/RegisterVacancie'



import { createBottomTabNavigator, createTabNavigator } from 'react-navigation-tabs'


const BaseNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: 
      <Icon name="home" size={18} color="#999" />
    
    
  },
  UserScreen: {
      screen: UserScreen,
      navigationOptions: () =>({
        
      })
  },
  VacancieScreen: {
    screen: VacancieScreen,
    navigationOptions: () =>({
      
    })
  },
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: () =>({
     
      
    })
  }

})

const userNavigator = createBottomTabNavigator({
    HomeScreen: {
    screen: HomeScreen,
    navigationOptions: () =>({
      
    })
    
  },
  VacancieScreen: {
    screen: VacancieScreen,
    navigationOptions: () =>({
      
    })
    
  },
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: () =>({
    
    })
  }

})





const startStack = createStackNavigator({
   HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {header: null}
   },
   RegisterVacancie: {
    screen: RegisterVacancie,
    navigationOptions: RegisterVacancieNavigation
   },
   UserScreen: {
    screen: UserScreen,
    navigationOptions: UserNavigation
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
  RegisterVacancie,
  HomeScreen,
  startStack,
 
  
});

export default Routes = createAppContainer(AppNavigator);