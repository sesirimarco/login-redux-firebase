import { firebaseSignIn, firebaseSignOut, firebaseIsLogged } from '../firebase/firebase';
import axios from 'axios';


export const SIGN_IN = 'SIGN_IN';
export const IS_LOGGED = 'IS_LOGGED';
export const IS_SIGNING = 'IS_SIGNING';
export const SIGN_OUT = 'SIGN_OUT';

export const INIT_TODOS = 'INIT_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETE: 'SHOW_COMPLETE',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
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

//TODOS

export const initTodos = () => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/todos',
        })
        .then(res => {
            dispatch({ type: INIT_TODOS, todos: res.data});
        })
        .catch(error => {
            console.log(error);
        })
    };

};
export const addTodo = (text) => {
    return { type: ADD_TODO, text };
};
export const completeTodo = (id) => {
    return { type: COMPLETE_TODO, id };
};
export const setVisibilityFilter = (filter) => {
    return { type: SET_VISIBILITY_FILTER, filter: filter };
};