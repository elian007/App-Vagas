import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, TouchableOpacity, Image, Alert, TextInput} from 'react-native';
import Ripple from 'react-native-material-ripple';
import firebase from 'firebase'

import AlertDialog from '../../components/AlertDialog/AlertDialog'
import Input from '../../components/Input/Input';
import theme from '../../styles/theme';
import './style'

export function UpdateVacancieNavigation() {
  return {
    title: 'Dados da vaga',
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

export default function UpdateVacancie({navigation}) {
    const [vaga, setvaga] = useState(navigation.state.params.vaga);
    const [empresa, setempresa] = useState(navigation.state.params.empresa);
    const [email, setemail] = useState(navigation.state.params.email);
    const [descricao, onChangeDesc] = React.useState(navigation.state.params.descricao);
    const [requisitos, onChangeReq] = React.useState(navigation.state.params.requisitos);



function deleteVacancie(){
 //<AlertDialog />
  const { currentUser} = firebase.auth()

  setTimeout(() =>{
    firebase
    .database()
    .ref(`users/${currentUser.uid}/vaga`)
    .remove()
    .then(() => {
      Alert.alert('Vaga deletada!')
      navigation.navigate("HomeCompany")

    })
  },5000)
}
    
function updateVacancie(e, v, emp, desc, r){
  const { currentUser} = firebase.auth()

  setTimeout(() =>{
    firebase
    .database()
    .ref(`users/${currentUser.uid}/vagas`)
    .update({
      email: `${e}`,
      vaga: `${v}`,
      empresa: `${emp}`,
      descricao: `${desc}`,
      requisitos: `${r}`
    })
    .then(() => {
      Alert.alert('Vaga alterado!')
      navigation.navigate("HomeCompany")

    })
    
  },5000)

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
         <Input
          value={email}
          changeText={setemail}
          label="E-mail"
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
          onPress={() => updateVacancie(email, vaga, empresa, descricao, requisitos)}
        >
          <Text style={styles.textButton}>Alterar</Text>
        </Ripple>

        <Ripple
          rippleContainerBorderRadius={50}
          style={styles.button}
          onPress={() => deleteVacancie()}>
          <Text style={styles.textButton}>Deletar conta!</Text>
        </Ripple>
        
        
      </KeyboardAvoidingView> 
    </View> 
   
  );
}