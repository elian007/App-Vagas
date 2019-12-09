import React from 'react';
import { View , Text, StyleSheet, Image } from 'react-native';

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
const CardDetail = ({vagas}) => (
  <View style={styles.container}>

      <View style={styles.card}>
          <Text style={styles.text}>Vaga: { `${vagas.vaga}`}</Text>
          <Text>Empresa: { ` ${vagas.empresa}`}</Text>
          <Text>E-mail: { ` ${vagas.email}`}</Text>
          <Text>Descrição: {`${vagas.descricao}`}</Text>
          <Text>Requisitos: {`${vagas.requisitos}`}</Text>

      </View>
  </View>

)

const styles = StyleSheet.create({
  container: {
      flex: 1,

    },
    card: {
     flex: 1,
     borderWidth: 1
    },
    text:{
      textAlign: 'center'
    }
})


export default CardDetail