import React from 'react';
import { View , Text } from 'react-native';

// import { Container } from './styles';

export function DetailNavigation() {
  return {
    title: 'Detalhes da Vaga',
    headerStyle: {
      backgroundColor: theme.lightGray,
      elevation: 1
    },
    headerTintColor: theme.primaryColor,
    headerTitleStyle: { color: theme.dark }
  };
}
export default function DetailScreen() {
  return (
    <View>
      <Text>Detalhes</Text>
      <Text>Detalhes</Text>
      <Text>Detalhes</Text>
      <Text>Detalhes</Text>
      <Text>Detalhes</Text>

    </View>
  );
}
