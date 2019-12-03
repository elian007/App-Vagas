import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, TouchableOpacity, Image, Alert} from 'react-native';
import Ripple from 'react-native-material-ripple';
import firebase from 'firebase'

import AlertDialog from '../../components/AlertDialog/AlertDialog'
import Input from '../../components/Input/Input';
import theme from '../../styles/theme';
import './style'

export function UserScreenNavigation() {
  return {
    title: 'Dados do Usuário',
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

export default function UserScreen({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();



function deleteUser(){
 //<AlertDialog />
  const { currentUser} = firebase.auth()

  setTimeout(() =>{
    firebase
    .database()
    .ref(`users/${currentUser.uid}`)
    .remove()
    .then(() => {
      Alert.alert('Usuário deletado!')
      navigation.navigate("LoginCompanyScreen")

    })
  },5000)
}
    
function updateUser(e){
  const { currentUser} = firebase.auth()

  setTimeout(() =>{
    firebase
    .database()
    .ref(`users/${currentUser.uid}`)
    .update({
      email: `${e}`
    })
    .then(() => {
      Alert.alert('Usuário alterado!')
      navigation.navigate("LoginCompanyScreen")

    })
    
  },5000)

}




  return (
  
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
     
      <KeyboardAvoidingView style={{ flex: 1, width: '100%' }} behavior="padding" enabled>
        
        <Input
          autoCapitalize="none"
          value={email}
          changeText={setEmail}
          label="E-mail: empresa@email.com"
          isPrimary
          focusedColor={theme.primaryColor}
          unfocusedColor={theme.darktGray}
        
        />
        <Input
          autoCapitalize="none"
          secureTextEntry
          value={password}
          changeText={setPassword}
          label="Entre com sua senha antiga"
          isPrimary
          focusedColor={theme.primaryColor}
          unfocusedColor={theme.darktGray}
        />
         <Input
          autoCapitalize="none"
          secureTextEntry
          value={password}
          changeText={setPassword}
          label="Entre com a nova senha"
          isPrimary
          focusedColor={theme.primaryColor}
          unfocusedColor={theme.darktGray}
        />

        <Ripple
          rippleContainerBorderRadius={50}
          style={styles.button}
          onPress={() => updateUser(email)}
        >
          <Text style={styles.textButton}>Alterar</Text>
        </Ripple>

        <Ripple
          rippleContainerBorderRadius={50}
          style={styles.button}
          onPress={() => deleteUser()}>
          <Text style={styles.textButton}>Deletar conta!</Text>
        </Ripple>
        
        
      </KeyboardAvoidingView> 
    </View> 
   
  );
}
