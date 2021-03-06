import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, Alert } from 'react-native';
import Ripple from 'react-native-material-ripple';

import Input from '../../components/Input/Input';
import theme from '../../styles/theme';
import firebase from 'firebase'

export function RegisterNavigation() {
  return {
    title: 'Register',
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

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  function handleSubmit(email, password) {
              firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then(user =>{
                Alert.alert(
                  'Usuário cadastrado com sucesso!',
                )
                navigation.navigate('LoginCompanyScreen')
              })
              .catch(function(error) {
                var errorCode = error.code;
                  alert(errorCode);
                } 
                   
      
          );
  }


  return (
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <KeyboardAvoidingView style={{ flex: 1, width: '100%' }} behavior="padding" enabled>
        
        <Input
          autoCapitalize="none"
          value={email}
          changeText={setEmail}
          label="E-mail: empresa@provider.com"
          isPrimary
          focusedColor={theme.primaryColor}
          unfocusedColor={theme.darktGray}
        />
        <Input
          autoCapitalize="none"
          secureTextEntry
          value={password}
          changeText={setPassword}
          label="Enter your password here"
          isPrimary
          focusedColor={theme.primaryColor}
          unfocusedColor={theme.darktGray}
        />
        <Ripple
                     rippleContainerBorderRadius={50}
                     style={styles.button}
                     onPress={() => handleSubmit(email, password)}
                >
                    <Text style={styles.textButton}>Salvar!</Text>
               </Ripple>
      </KeyboardAvoidingView>
    </View>
  );
}
