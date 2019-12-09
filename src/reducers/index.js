import { combineReducers} from 'redux'

import userReducer from './userReducer'
import listVagasReducer from './listVagasReducer';

export default combineReducers({
    user: userReducer,
    allVagas: listVagasReducer,
})