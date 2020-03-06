import React, { useState } from 'react';
import { AddTodo } from './AddTodo';
import { addTodo } from './actions';
import { AppState } from '../store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Todo } from './types';
import { ConnectedTodoList } from './TodoList';
//const styles = require('./TodosInterface.less');
import './TodosInterface.less';

type TodosProps = { 
    addTodos: typeof addTodo,
    todos: Array<Todo>
}
const TodosInterface: React.FC<TodosProps> = (props: TodosProps) => { 
    const [name, setName] = useState('');
    const add = (name: string ) => { 
        props.addTodos({ name, isCompleted: false, id:  1});
        
    }
    return (
        <div id="root" className={'TodosInterface'}>
            <h3 className={'h3'}>Todos</h3>
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