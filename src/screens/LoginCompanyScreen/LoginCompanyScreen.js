import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, TouchableOpacity, Image, Alert} from 'react-native';
import Ripple from 'react-native-material-ripple';
import firebase from 'firebase'

import Input from '../../components/Input/Input';
import theme from '../../styles/theme';
import './style'

export function LoginCompanyNavigation() {
  return {
    title: 'Empresa',
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


export default function LoginCompanyScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(email, password) {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user =>{
      navigation.navigate('RegisterVacancie', {user: user});

    })
    .catch(function(error) {
      var errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        Alert.alert(
          'Senha incorreta.',
        );
        
      } 
      if (errorCode === 'auth/user-not-found') {
        Alert.alert(
          'E-mail inexistente.',
          'Deseja criar um novo usuário?',
          [{
            text: 'Não',
            onPress: () => {}
          },
          {
            text: 'Sim',
            onPress: () => {
              firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then(user =>{
                alert(
                  'Usuário cadastrado com sucesso!',
                )
                navigation.navigate('LoginCompanyScreen')
              })
              .catch(function(error) {
                var errorCode = error.code;
                if (errorCode === 'auth/wrong-password') {
                  alert('Senha incorreta.');
                } 
                if (errorCode === 'auth/user-not-found') {
                  alert(
                    'E-mail inexistente.',)
                  }   
                })     
            }
          }
        ],
          );
      }
      else {
        alert(error);
      }
    });
  }

  return (
  
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <Image
          style={styles.img}
          source={require('../../../assets/image/logo.png')}
        />
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
          <Text style={styles.textButton}>Entrar!</Text>
        </Ripple>

        <Ripple
          rippleContainerBorderRadius={50}
          style={styles.button}
          onPress={() => navigation.navigate('RegisterVacancie')
          }  
        >
          <Text style={styles.textButton}>Criar minha conta!</Text>
        </Ripple>

      </KeyboardAvoidingView>
    </View> 
   
  );
}
