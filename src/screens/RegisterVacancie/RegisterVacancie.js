import React, {useState} from 'react';
import {View, Text, KeyboardAvoidingView, TextInput, StyleSheet, Alert} from 'react-native'
import Ripple from 'react-native-material-ripple';
import firebase from 'firebase'


import Input from '../../components/Input/Input';
import theme from '../../styles/theme';

export function RegisterVacancieNavigation() {
    return {
      title: 'Cadastrar vagas',
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


export default function RegisterVacancie({ navigation }) {
  const [vaga, setvaga] = useState();
  //const [descricao, setdescricao] = useState();
  //const [requisitos, setrequisitos] = useState();
  const [empresa, setempresa] = useState();
  const [descricao, onChangeDesc] = React.useState('');
  const [requisitos, onChangeReq] = React.useState('');


  function saveVacancie (v, emp, desc, req) {
    const { currentUser} = firebase.auth()

    firebase
     .database()
     .ref(`/users/${currentUser.uid}/vagas`)
     .push({
        vaga: `${v}`,
        empresa: `${emp}`,
        descricao: `${desc}`,
        requisitos: `${req}`
     })
     .then(() => {
      Alert.alert(
        'Vaga cadastrada!',
      )
       navigation.navigate('HomeCompany')
     })
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <KeyboardAvoidingView style={{ flex: 1, width: '100%' }} behavior="padding" enabled>
        <Input
          value={vaga}
          changeText={setvaga}
          label="Vaga"
          isPrimary
          focusedColor={theme.primaryColor}
          unfocusedColor={theme.darktGray}
        />
        <Input
          value={empresa}
          changeText={setempresa}
          label="Empresa"
          isPrimary
          focusedColor={theme.primaryColor}
          unfocusedColor={theme.darktGray}
        />
        <TextInput
          value={descricao}
          onChangeText={text => onChangeDesc(text)}
          placeholder="Descrição"
          isPrimary
          focusedColor={theme.primaryColor}
          unfocusedColor={theme.darktGray}
          numberOfLines={5}
          multiline={true}
          style = {styles.input}
        />
        <TextInput
          
          value={requisitos}
          onChangeText={text => onChangeReq(text)}
          placeholder="Requisitos"
          isPrimary
          focusedColor={theme.primaryColor}
          unfocusedColor={theme.darktGray}
          numberOfLines={5}
          multiline={true}
          style = {styles.input}
        />
         
        <Ripple
                     rippleContainerBorderRadius={50}
                     style={styles.button}
                     onPress={() => saveVacancie(vaga, empresa, descricao, requisitos)}
                >
                    <Text style={styles.textButton}>Salvar!</Text>
               </Ripple>
      </KeyboardAvoidingView>
    </View>
);}


const styles = StyleSheet.create({
  input:{
    borderWidth: 1,
    padding: 15,
    marginTop: 8
  },
  button: {
    width: '40%',
    marginVertical: 25,
    backgroundColor: '#38B6FF',
    paddingVertical: 15,
    borderRadius: 50,
    borderBottomColor: '#38B6FF'
  },
  textButton: {
    textAlign: 'center',
    color: 'white'
  },
  registerText: {
    color: '#fff',
    fontWeight: '600'
  }
})
