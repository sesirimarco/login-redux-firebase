import { 
    SIGN_IN,
    IS_SIGNING, 
    IS_LOGGED,
    SIGN_OUT, 
    ADD_TODO, 
    COMPLETE_TODO 
} from './actions';

const initialState = {
    todos: [],
    isLogged: false,
    isLoading: false,
    user: null
};

const todoApp = (state = initialState, action) => {
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
                    isLogged: true
                }
        case ADD_TODO:
            return {
                ...state, 
                todos: [
                    ...state.todos, 
                    {
                        text:action.text, 
                        complete:false
                    }
                ]
            }
        case COMPLETE_TODO:
            return {
                ...state, 
                todos: [
                    state.todos.map((todo) => {
                        if(todo.id === action.id) {
                            todo.complete = true;
                        }
                        return todo;
                    })
                ]
            }
        default:
           return state;
    }
};

export default todoApp;