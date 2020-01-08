export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export interface Todo { 
    id: number | undefined,
    name: string,
    isCompleted: boolean
}

export interface AddTodoAction { 
    type: typeof ADD_TODO, 
    payload: Todo
}

export interface FetchTodoAction { 
    type: typeof FETCH_TODOS
}

export interface RemoveTodoAction { 
    type: typeof REMOVE_TODO,
    paylaod: number
}

export interface UpdateTodoAction { 
    type: typeof UPDATE_TODO,
    payload: Todo
}

export type TodoActionTypes = AddTodoAction | FetchTodoAction | RemoveTodoAction | UpdateTodoAction;
