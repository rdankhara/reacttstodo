import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Todo } from './todo/types';
import { TodoState, todoReducer } from './todo/todoReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface AppState extends TodoState { 
    todos: Array<Todo> 
}

const rootReducer = combineReducers({ todoReducer })
export const configureStore = () => { 
    //const store = createStore(rootReducer, composeWithDevTools());
    const store = createStore(rootReducer);

    return store;
}