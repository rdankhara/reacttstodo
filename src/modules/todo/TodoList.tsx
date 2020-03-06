import React from 'react';
import { Todo } from './types';
import { style } from 'typestyle';
import { AppState } from '../store';
import { Dispatch } from 'redux';
import { updateTodo } from './actions';
import { connect } from 'react-redux';

export interface TodoListProps { 
    todos: Array<Todo>
}

const todoContainer = style({
    display: 'flex',
    minHeight: '20px'
})
const TodoList:React.FC<TodoListProps> = (props: TodoListProps) => { 
    const { todos } = props;
    console.log('todos in todoList', todos)
    return (
        <div>
            {
                todos && todos.map( (todo) => {
                    return (
                    <div className={todoContainer}>
                        <div>{name}</div>
                    </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({ todos: state.todos});
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateTodo: (todo: Todo) => dispatch(updateTodo(todo))
    }
}

const ConnectedTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export { ConnectedTodoList};