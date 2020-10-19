import { 
    SIGN_IN,
    IS_SIGNING, 
    IS_LOGGED,
    SIGN_OUT, 
} from '../actions/authActions';

const initialState = {
    isLogged: false,
    isLoading: false,
    user: null
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                user: action.payload,
                isLogged: true,
                isLoading: false
            }
        case IS_SIGNING:
            return {
                ...state,
                isLoading: true
            }
        case SIGN_OUT:
            return {
                ...state,
                user: null,
                isLogged: false,
                isLoading: false
            }
        case IS_LOGGED:
                return {
                    ...state,
                    user: action.payload,
                    isLogged: action.payload ? true : false
                }
        default:
           return state;
    }
};

export default auth;