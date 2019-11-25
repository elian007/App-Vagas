import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text } from 'react-native';
import Ripple from 'react-native-material-ripple';

import Input from '../../components/Input/Input';
import theme from '../../styles/theme';

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
  const [name, setname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  return (
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <KeyboardAvoidingView style={{ flex: 1, width: '100%' }} behavior="padding" enabled>
        <Input
          value={name}
          changeText={setname}
          label="Nome"
          isPrimary
          focusedColor={theme.primaryColor}
          unfocusedColor={theme.darktGray}
        />
        <Input
          autoCapitalize="none"
          value={email}
          changeText={setEmail}
          label="Email"
          isPrimary
          focusedColor={theme.primaryColor}
          unfocusedColor={theme.darktGray}
        />
        <Input
          autoCapitalize="none"
          secureTextEntry
          value={password}
          changeText={setPassword}
          label="Senha"
          isPrimary
          focusedColor={theme.primaryColor}
          unfocusedColor={theme.darktGray}
        />
        <Ripple
                     rippleContainerBorderRadius={50}
                     style={styles.button}
                     onPress={() => navigation.navigate()}
                >
                    <Text style={styles.textButton}>Salvar!</Text>
               </Ripple>
      </KeyboardAvoidingView>
    </View>
  );
}
