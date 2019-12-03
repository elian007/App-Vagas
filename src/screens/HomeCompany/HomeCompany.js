import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, TouchableOpacity, Image} from 'react-native';
import Ripple from 'react-native-material-ripple';

import theme from '../../styles/theme';
import './style'


export function HomeCompanyNavigation() {
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
  
  return (
  
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <Image
          style={styles.img}
          source={require('../../../assets/image/logo.png')}
        />
      <KeyboardAvoidingView style={{ flex: 1, width: '100%' }} behavior="padding" enabled>
        
        
        <Ripple
          rippleContainerBorderRadius={50}
          style={styles.button}
          onPress={() => navigation.navigate('UserScreen')
          }  
        >
          <Text style={styles.textButton}>Alterar usuário</Text>
        </Ripple>

        <Ripple
          rippleContainerBorderRadius={50}
          style={styles.button}
          onPress={() => navigation.navigate('AboutScreen')
          }  
        >
          <Text style={styles.textButton}>Sobre</Text>
        </Ripple>

        <Ripple
          rippleContainerBorderRadius={50}
          style={styles.button}
          onPress={() => navigation.navigate('ListVacancie')
          }  
        >
          <Text style={styles.textButton}>Vagas cadastradas</Text>
        </Ripple>

        <Ripple
          rippleContainerBorderRadius={50}
          style={styles.button}
          onPress={() => navigation.navigate('RegisterVacancie')
          }  
        >
          <Text style={styles.textButton}>Cadastrar vagas</Text>
        </Ripple>

        <View style = {styles.touc}>
         <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')
          }>
            <Text style = {styles.but}>
               Sair
            </Text>
         </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </View> 
   
  );
}
