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

export const initTodos = ({providerData}) => {
    
    return (dispatch) => {
        getAllTodos(providerData[0].uid)
        .then(resp => {
            dispatch({ type: INIT_TODOS, todos: resp});
        })
        .catch(error => {
            console.log(error);
        })
    };

};
export const addTodo = ({title, user}) => {
    return (dispatch) => {
        //dispatch({ type: IS_SIGNING });
        const {uid} = user.providerData[0];
        createTodo({title, uid})
        .then(result => {
            console.log('result ' ,result)
            dispatch({ type: ADD_TODO, title });
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