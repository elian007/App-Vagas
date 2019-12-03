import React from 'react';
import {View, Text, KeyboardAvoidingView, TextInput, StyleSheet, FlatList} from 'react-native'
import firebase from 'firebase'


// import { Container } from './styles';



export function ListVacancieNavigation() {
    return {
      title: 'Vagas cadastradas',
      headerStyle: {
        backgroundColor: theme.primaryColor,
        elevation: 1,
        borderBottonColor: theme.borderBotton
      },
      headerTintColor: theme.light,
      headerTitleStyle: { 
        color: theme.light,
        fontSize: 28
      },
      
    };
  }
export default function ListVacancie({navigation}) {
  

  
    //firebase.database().ref('users').on('value').then(function(snapshot) {
     // const vaga = (snapshot.val() && snapshot.val().vagas) || 'Anonymous';
     // console.log(vaga)
   // })
    const {currentUser} = firebase.auth()
    var vagas = firebase.database().ref(`users/${currentUser.uid}/vagas/`);
    vagas.on('value', function(snapshot) {
      snapshot.val().uid
    });
console.log()


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
  );
}
