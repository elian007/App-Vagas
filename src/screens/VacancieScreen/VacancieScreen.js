import React, { Component } from 'react'
import { Button, View, Text, ScrollView, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native'

import vagas from '../../../vagas.json'
import VagaCard from '../../components/VagaCard/VagaCard'

import './style'

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


  renderFooter = () => {
    if(!vagas) return null
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  };
  
      return (
        <View>
          <FlatList 
            data = {vagas}
            renderItem = {({item}) =>{
              return(
                <TouchableOpacity onPress={() => navigation.navigate('DetailScreen',
                  {
                    vaga: item.vaga, 
                    descricao: item.descricao, 
                    requisitos: item.requisitos,
                    email: item.email,
                    empresa: item.empresa
                  })}
                >

                  <VagaCard vagas={item}/>
                </TouchableOpacity>
              )
            }}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            onEndReachedThreshold={0.1}
            ListFooterComponent={this.renderFooter}
          />

        </View>
      )
    }
  
  