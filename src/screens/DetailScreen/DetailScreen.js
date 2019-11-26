import React, { Component } from 'react'
import { Button, View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native'

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
          <View>
           <Text>
              Vaga: {JSON.stringify(navigation.getParam('vaga'))}

           </Text>
           <Text>
              Descrição: {JSON.stringify(navigation.getParam('descricao'))}
           </Text>
           <Text>
              Requisitos: {JSON.stringify(navigation.getParam('requisitos'))}
           </Text>
           <Text>
              Empresa: {JSON.stringify(navigation.getParam('empresa'))}
           </Text>
  
          </View>
        )
      
    }
  