import { 
    createTodo,
    getAllTodos, 
} from '../../firebase/firebase';

export const INIT_TODOS = 'INIT_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETE: 'SHOW_COMPLETE',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export const initTodos = () => {
    return (dispatch) => {
        getAllTodos()
        .then(resp => {
            dispatch({ type: INIT_TODOS, todos: resp});
        })
        .catch(error => {
            console.log(error);
        })
    };

};
export const addTodo = (text) => {
    return (dispatch) => {
        //dispatch({ type: IS_SIGNING });
        createTodo(text)
        .then(user => {
            dispatch({ type: ADD_TODO, text });
        })
        .catch(error => {
            console.log(error);
        });
    };
};
export const completeTodo = (id) => {
    return { type: COMPLETE_TODO, id };
};
export const setVisibilityFilter = (filter) => {
    return { type: SET_VISIBILITY_FILTER, filter: filter };
};