import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'


const VagaCard = ({vagas}) => (
    <View style={styles.container}>
        
        <View style={styles.card}>
            <Text style={styles.text2}>Vaga: { `${vagas.vaga}`}</Text>
            <Text style={styles.text2}>Empresa: { ` ${vagas.empresa}`}</Text>
            <Image source={{uri: `${vagas.img}`}} />
            <Text style={styles.text}>Clique na vaga,</Text>
            <Text style={styles.text1}>para saber mais...</Text>
        </View>
        
    </View>

)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10, 
        height: Dimensions.get('window').width / 2,
      },
      card: {
       flex: 1,
       borderWidth: 2
      }, 
      text: {
          marginLeft: 20,
        marginTop: 40,
        alignContent: 'center',
        fontSize: 19,
        fontWeight: 'bold'
      },
      text1: {
        marginLeft: 15,
      textAlign: 'center',
      fontSize: 19,
      fontWeight: 'bold'
    },
    text2: {
        marginLeft: 5,
      textAlign: 'center',
      fontSize: 14,
    },
})
 

export default VagaCard