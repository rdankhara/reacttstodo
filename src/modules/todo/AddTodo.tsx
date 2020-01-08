import React from 'react';
import { HandleChangeParam } from '../types';
import { style } from 'typestyle';

const todoContainer = style({ 
    display: 'flex', 
    flexDirection: 'row',
})

const todoName = style({
    padding: '5px 10px'
})
export interface AddTodoProps {
    name: string,
    isCompleted: boolean 
    handleChange: (event: HandleChangeParam) => void
}

export const AddTodo: React.FC<AddTodoProps> = ({name, isCompleted, handleChange}) =>
 { 
     return (
         <div>
             <h3>Todo</h3>
             <div className={todoContainer}>
             <input value={name}
                onChange={handleChange}
                className={todoName}
                placeholder={"enter todo name"}
             />
             <button>Add</button>
             </div>
         </div>
     )
 }