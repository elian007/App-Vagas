import React from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native'
import {connect} from 'react-redux';

import firebase from 'firebase'

import { watchVagas } from '../../actions';

// import { Container } from './styles';

import vag from '../../../vagas.json'
import VagaCard from '../../components/VagaCard/VagaCard'

export function ListVacancieNavigation() {
    return {
      title: 'Vagas cadastradas',
      headerStyle: {
        backgroundColor: theme.primaryColor,
        elevation: 1,
        borderBottonColor: theme.borderBotton
      },
      headerTintColor: theme.light,
      headerTitleStyle: { 
        color: theme.light,
        fontSize: 28
      },
      
    };
  }

class ListVacancie extends React.Component {

  componentWillMount() {
    this.props.watchVagas();
  }

  render() {
    return (
      <View>
            <FlatList 
              data = {vag}
              renderItem = {({item}) => (
                  <TouchableOpacity onPress={() => navigation.navigate('UpdateVacancie',
                    {
                      vaga: item.vaga, 
                      descricao: item.descricao, 
                      requisitos: item.requisitos,
                      empresa: item.empresa
                    })}
                  >
  
                    <VagaCard vagas={item}/>
                  </TouchableOpacity>
                )
              }
              keyExtractor={item => item.id.toString()}
              numColumns={2}
            />
             
          </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { allVagas } = state;

  if (allVagas === null) {
    return { allVagas: allVagas};
  }
  watchVagas
  return { allVagas: allVagas };
};
export default connect(mapStateToProps, { watchVagas })(ListVacancie);
