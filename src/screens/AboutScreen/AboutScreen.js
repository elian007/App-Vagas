import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

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
export default function AboutScreen({navigation}) {
  return (
    <View tyle={styles.container}>
    <View style={styles.card}>
      <Text style={styles.text}>Aplicativo voltado para divulgação de vagas de estágio</Text>
      
      <Text style={styles.text}>Empresas precisam criar um cadastro</Text>
      <Text style={styles.text}>Alunos apenas visualizam as vagas</Text> 
      <Text style={styles.text}>App criado por: Elian Marcos</Text> 
      <Text style={styles.text}>Matéria: Mobile</Text>
      <Text style={styles.text}>#reactnative#firebase</Text>
      <Text style={styles.text}>2019</Text>

      <View style = {styles.touc}>
         <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Text style = {styles.but}>
               Sair
            </Text>
         </TouchableOpacity>
      </View>
    </View>
    </View>
  );
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
    fontSize:15,
    fontWeight: 'bold'
  },
  touc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  but: {
    padding: 25,
    color: '#38B6FF',
    fontSize: 22
  }
})