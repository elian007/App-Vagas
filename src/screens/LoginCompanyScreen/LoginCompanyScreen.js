import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, TouchableOpacity, Image} from 'react-native';
import Ripple from 'react-native-material-ripple';
import firebase from 'firebase'

import Input from '../../components/Input/Input';
import theme from '../../styles/theme';
import './style'


export function LoginCompanyNavigation() {
  return {
    title: 'Empresa',
    tabBarOptions: {
      inactiveTintColor: 'blue',
      activeTintColor: 'white',

      activeBackgroundColor: '#0000FF',

      labelStyle: {
        fontSize: 18,
      },
      style: {
        backgroundColor: 'white',
      },
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
      navigation.navigate('VacancieScreen');

    })
    .catch(function(error) {
      var errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        alert(
          'Senha incorreta.',
        );
        
      } 
      if (errorCode === 'auth/user-not-found') {
        alert(
          'E-mail inexistente.',
          'Deseja criar um novo usuário?',
          [{
            text: 'Não',
            onPress: () => {}
          },
          {
            text: 'Sim',
            onPress: () => {}
          }
        ]
          );
      }
      else {
        alert('Erro desconhecido');
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
          onPress={() => navigation.navigate('RegisterScreen')
          }  
        >
          <Text style={styles.textButton}>Criar minha conta!</Text>
        </Ripple>

      </KeyboardAvoidingView>
    </View> 
  );
}
