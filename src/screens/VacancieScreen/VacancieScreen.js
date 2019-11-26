import React, { Component } from 'react'
import { Button, View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native'

import vagas from '../../../vagas.json'
import VagaCard from '../../components/VagaCard/VagaCard'

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
        <View>
          <FlatList 
            data = {vagas}
            renderItem = {({item}) =>{
              console.log(item)
              return(
                <TouchableOpacity onPress={() => navigation.navigate('DetailScreen',
                  {
                    vaga: item.vaga, 
                    descricao: item.descricao, 
                    requisitos: item.requisitos,
                    empresa: item.empresa
                  })}
                >

                  <VagaCard vagas={item}/>
                </TouchableOpacity>
              )
            }}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
          />

        </View>
      )
    }
  
  