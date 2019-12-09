import firebase from 'firebase';

export const SET_VAGAS = 'SET_VAGAS';
export const setVagas = (vagas) => ({
    type: SET_VAGAS,
    vagas,
});

export const watchVagas = () => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase
            .database()
            .ref(`users/${currentUser.uid}/vagas`)
            .on('value', (snapshot) => {
                const vagas = snapshot.val();
                const action = setVagas(vagas);
                dispatch(action);
            });
    };
}