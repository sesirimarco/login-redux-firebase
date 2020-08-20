import { googleAuth } from '../firebase/firebase';

export const SIGN_IN = 'SIGN_IN';
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

export const signIn = (payload) => {
    return (dispatch) => {
        dispatch({ type: IS_SIGNING });
        googleAuth()
        .then(user => {
            console.log(user);
            dispatch({ type: SIGN_IN, payload: user });
        })
        .catch(error => {
            console.log(error);
        })
        
    };
};
export const signOut = () => {
    return { action: SIGN_OUT };
};