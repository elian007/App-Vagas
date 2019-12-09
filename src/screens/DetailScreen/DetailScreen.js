import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import Ripple from 'react-native-material-ripple';


import vagas from '../../../vagas.json'
import DetailCard from '../../components/CardDetail/CardDetail'

export function DetailNavigation() {
  return {
    title: 'Detalhes da vaga',
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
}

export default function DetailScreen ({ navigation }) {
  
  
    
        return (
          <View tyle={styles.container}>
          <View style={styles.card}>
           <Text style={styles.text}>
              Vaga: {JSON.stringify(navigation.getParam('vaga'))}

           </Text>
           <Text style={styles.text}>
              Descrição: {JSON.stringify(navigation.getParam('descricao'))}
           </Text>
           <Text style={styles.text}>
              Requisitos: {JSON.stringify(navigation.getParam('requisitos'))}
           </Text>
           <Text style={styles.text}>
              Empresa: {JSON.stringify(navigation.getParam('empresa'))}
           </Text>
           <Text style={styles.text}>
              E-mail: {JSON.stringify(navigation.getParam('email'))}
           </Text>

          </View>
         
          </View>
        )
      
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  card: {
    
   flex: 1,
   marginTop: 10,
   alignItems: 'center'
  },
  text:{
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold'
  },
})
  