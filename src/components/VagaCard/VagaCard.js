import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

import './style'

const VagaCard = ({vagas}) => (
    <View style={styles.container}>

        <View style={styles.card}>
            <Text>Vaga: { `${vagas.vaga}`}</Text>
            <Text>Empresa: { ` ${vagas.empresa}`}</Text>
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
       borderWidth: 1
      },
})
 

export default VagaCard