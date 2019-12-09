import { SET_VAGAS } from '../actions';

export default function(state = null, action) {
    switch (action.type) {
        case SET_VAGAS:
            return action.vagas;
        default:
            return state;
    }
}