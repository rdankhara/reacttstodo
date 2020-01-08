import React, { useState } from 'react';
import { AddTodo } from './AddTodo';
import { addTodo } from './actions';
import { AppState } from '../store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Todo } from './types';
import { ConnectedTodoList } from './TodoList';

type TodosProps = { 
    addTodos: typeof addTodo,
    todos: Array<Todo>
}
const TodosInterface: React.FunctionComponent<TodosProps> = (props: TodosProps) => { 
    const [name, setName] = useState('');
    const add = (name: string ) => { 
        console.log('name', name, 'todos', props.todos);
        props.addTodos({ name, isCompleted: false, id: props.todos.length + 1});
    }
    return (
        <div>
            <h3>Todos</h3>
            <AddTodo name={name} setName={setName} add={add}/>
            <ConnectedTodoList /> 
        </div>
    )
}

const mapStateToProps = (state: AppState) => { 
    return { 
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => { 
    return { 
        addTodos: (todo: Todo) => dispatch(addTodo(todo))
    }
}
const ConnectedTodosInterface =  connect(mapStateToProps, mapDispatchToProps)(TodosInterface);
export {ConnectedTodosInterface, TodosInterface };