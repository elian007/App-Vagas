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
          <Text>Vaga: { `${vagas.vaga}`}</Text>
          <Text>Empresa: { ` ${vagas.empresa}`}</Text>
          <Text>Descrição: {`${vagas.descricao}`}</Text>
          <Text>Requisitos: {`${vagas.requisitos}`}</Text>
          <Image source= {{uri: vagas.img}} aspectRatio={1}/>

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
})


export default CardDetail