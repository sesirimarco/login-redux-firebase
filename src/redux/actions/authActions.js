import { 
    firebaseSignIn, 
    firebaseSignOut, 
    firebaseIsLogged,
} from '../../firebase/firebase';

export const SIGN_IN = 'SIGN_IN';
export const IS_LOGGED = 'IS_LOGGED';
export const IS_SIGNING = 'IS_SIGNING';
export const SIGN_OUT = 'SIGN_OUT';

export const signIn = () => {
    return (dispatch) => {
        dispatch({ type: IS_SIGNING });
        firebaseSignIn()
        .then(user => {
            dispatch({ type: SIGN_IN, payload: user });
        })
        .catch(error => {
            console.log(error);
        });
    };
};
export const isLogged = () => {
    return (dispatch) => {
        firebaseIsLogged()
        .then(user => {
            dispatch({type: IS_LOGGED, payload: user});
        })
        .catch((err) => {
            dispatch({type: IS_LOGGED, payload: null});
        });
    };
};
export const signOut = () => {
    
    return (dispatch) => {
        firebaseSignOut()
        .then(user => {
            dispatch({action: SIGN_OUT});
        })
        .catch((err) => {
            dispatch({type: IS_LOGGED, payload: null});
        });
    };
};