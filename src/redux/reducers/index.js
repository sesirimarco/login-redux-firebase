import { combineReducers } from 'redux';
import {todos, visibilityFilter} from './reducerTodos';
import auth from './reducerAuth';

const reducersApp = combineReducers({
    auth,
    visibilityFilter,
    todos
});
export default reducersApp;