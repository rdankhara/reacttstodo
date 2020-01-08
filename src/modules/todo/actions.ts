import { FETCH_TODOS, ADD_TODO, Todo, REMOVE_TODO } from "./types";

export const fetchTodos = () => ({type: FETCH_TODOS});

export const addTodo = (todo: Todo) => ({ type: ADD_TODO, payload: todo});

export const removeTodo = (id: number) => ({type: REMOVE_TODO, payload: id});