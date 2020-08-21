import { firebaseSignIn, firebaseSignOut, firebaseIsLogged } from '../firebase/firebase';

export const SIGN_IN = 'SIGN_IN';
export const IS_LOGGED = 'IS_LOGGED';
export const IS_SIGNING = 'IS_SIGNING';
export const SIGN_OUT = 'SIGN_OUT';
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';


export const addTodo = (text) => {
    return { action: ADD_TODO, text}
};
export const completeTodo = (id) => {
    return { action: COMPLETE_TODO, id };
};

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
            console.log('CurrentUser: ', user)
            dispatch({type: IS_LOGGED, payload: user});
        })
        .catch((err) => {
            console.log('CurrentUser: ', err)
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