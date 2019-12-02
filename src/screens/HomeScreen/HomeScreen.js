import React, { Component } from 'react'
import { Button, View, Text, Image, TouchableOpacity } from 'react-native'
import Ripple from 'react-native-material-ripple';

import styles from './styles';


export default function HomeScreen ({ navigation }) {
          return (
            <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/image/logo.png')} />

                <Ripple
                     rippleContainerBorderRadius={50}
                     style={styles.button}
                     onPress={() => navigation.navigate('VacancieScreen')}
                >
                    <Text style={styles.textButton}>Ir para Vagas!</Text>
               </Ripple>

               <Ripple
                     rippleContainerBorderRadius={50}
                     style={styles.button}
                     onPress={() => navigation.navigate('LoginCompanyScreen')}
                >
                    <Text style={styles.textButton}>Acesso: Empresas!</Text>
               </Ripple>
               
            </View>
          );
    }