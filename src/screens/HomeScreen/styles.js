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
    marginVertical: 25,
    fontSize: 15
  },
  img: {
    marginTop: 80,
    width: 450,
    height: 300,
    marginLeft: 60

  },
  button: {
    width: '70%',
    marginVertical: 25,
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 50,
    padding: 20
  },
  textButton: {
    textAlign: 'center',
    color: '#38B6FF'
  },
  registerText: {
    color: 'white',
    fontWeight: '600',
    padding: 20
  },
  touc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  but: {
    padding: 25,
    color: 'white',
    fontSize: 22
  },
 
});