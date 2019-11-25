import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  description: {
    color: theme.primaryDarkColor,
    marginVertical: 25
  },
  button: {
    width: '100%',
    marginVertical: 25,
    backgroundColor: '#38B6FF',
    paddingVertical: 15,
    borderRadius: 50,
    borderBottomColor: '#38B6FF'
  },
  textButton: {
    textAlign: 'center',
    color: 'white'
  },
  registerText: {
    color: '#fff',
    fontWeight: '600'
  },
  img: {
    marginTop: 80,
    width: 250,
    height: 150,
    marginLeft: 60

  }
});