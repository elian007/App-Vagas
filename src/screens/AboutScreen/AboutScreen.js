import React from 'react';
import { View, Text} from 'react-native'

// import { Container } from './styles';
export function AboutNavigation() {
  return {
    title: 'Sobre',
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
  };
  };
export default function AboutScreen() {
  return (
    <View>
    <Text>Sobre o app</Text>
  </View>
  );
}
