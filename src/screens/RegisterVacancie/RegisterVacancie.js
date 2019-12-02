import React, {useState} from 'react';
import {View, Text, KeyboardAvoidingView, TextInput} from 'react-native'
import Ripple from 'react-native-material-ripple';

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
      }
    };
  }


export default function RegisterVacancie({ navigation }) {
  const [vaga, setvaga] = useState();
  const [descricao, setdescricao] = useState();
  const [requisitos, setrequisitos] = useState();
  const [empresa, setempresa] = useState();



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
          autoCapitalize="none"
          secureTextEntry
          value={empresa}
          changeText={setempresa}
          label="Empresa
          "
          isPrimary
          focusedColor={theme.primaryColor}
          unfocusedColor={theme.darktGray}
        />
        <TextInput
          autoCapitalize="none"
          value={descricao}
          changeText={setdescricao}
          placeholder="Descrição"
          isPrimary
          focusedColor={theme.primaryColor}
          unfocusedColor={theme.darktGray}
          numberOfLines={5}
          multiline={true}
        />
        <TextInput
          autoCapitalize="none"
          secureTextEntry
          value={requisitos}
          changeText={setrequisitos}
          placeholder="Requisitos"
          isPrimary
          focusedColor={theme.primaryColor}
          unfocusedColor={theme.darktGray}
          numberOfLines={5}
          multiline={true}
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
);}
