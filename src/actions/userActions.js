const USER_LOGIN = 'USER_LOGIN'
const userLogin = user => ({
    type: USER_LOGIN,
    user
})

const USER_LOGOUT = 'USER_LOGOUT'
const userLogout = () => ({
    type: USER_LOGOUT
})

export const processLogin = () => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user =>{
      navigation.navigate('VacancieScreen', {user: user});
    })
    .catch(function(error) {
      var errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        Alert.alert('Senha incorreta.');
      } 
      if (errorCode === 'auth/user-not-found') {
        Alert.alert(
          'E-mail inexistente.',
          'Deseja criar um novo usuário?',
          [{
            text: 'Não',
            onPress: () => {}
          },
          {
            text: 'Sim',
            onPress: () => {
              firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then(user =>{
                Alert.alert(
                  'Usuário cadastrado com sucesso!',
                )
                navigation.navigate('LoginInternScreen')
              })
              .catch(function(error) {
                var errorCode = error.code;
                if (errorCode === 'auth/wrong-password') {
                  Alert.alert('Senha incorreta.');
                } 
                if (errorCode === 'auth/user-not-found') {
                  Alert.alert(
                    'E-mail inexistente.',)
                  }   
                })     
            }
          }
        ],
          );
      }
      else {
        Alert.alert('Erro desconhecido');
      }
    });
}