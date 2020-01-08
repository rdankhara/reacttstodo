import { Todo, ADD_TODO, REMOVE_TODO, TodoActionTypes, UPDATE_TODO } from "./types";

export interface TodoState { 
    todos: Array<Todo>
}

const initialState = { 
    todos: [{name: 'default one', isCompleted: false, id: 0}]
}
export const todoReducer = (state: TodoState = initialState, action: TodoActionTypes) : TodoState => { 
    console.log('state', state, 'action', action);
    switch(action.type) { 
        case ADD_TODO: 
            return { ...state, todos: [...state.todos, action.payload]}
        case REMOVE_TODO: 
            return { ...state, todos: [...state.todos.slice(0, action.paylaod-1), ...state.todos.slice(action.paylaod+1)]}
        case UPDATE_TODO: 
            const newTodos= state.todos.map(todo => todo.id !== action.payload.id ? todo : action.payload);
            return { ...state, todos: newTodos }
        default: 
            return state;
    }
}