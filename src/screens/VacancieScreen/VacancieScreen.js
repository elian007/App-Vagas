import React, { Component } from 'react'
import { Button, View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native'

import DetailScreen from '../DetailScreen/DetailScreen'

export function VacancieNavigation() {
  return {
    title: 'Vagas',
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

export default function VacancieScreen ({ navigation }) {
  
      
  
      return (
        <ScrollView>
          <TouchableOpacity onPress={() => navigation.navigate('DetailScreen')}>
           <Text>Vaga: Analista de RH</Text>
            <Text>Descrição: Cccccccc</Text>
            <Text>Requisitos: Dddddddd</Text>
            <Text>Empresa: Aaaaaaaaa</Text>
          </TouchableOpacity>
        
        
        </ScrollView>
      )
    }
  
  