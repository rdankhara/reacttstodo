import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Todo } from './todo/types';
import { TodoState, todoReducer } from './todo/todoReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface AppState extends TodoState { 
    todos: Array<Todo> 
}

const rootReducer = combineReducers({ todoReducer })

const initialState: AppState = { todos: [{ name: 'name1', isCompleted: false, id: 0}]};
export const configureStore = () => { 
    const store = createStore(rootReducer, composeWithDevTools());
    return store;
}