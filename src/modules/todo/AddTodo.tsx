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
    setName: React.Dispatch<React.SetStateAction<string>>,
    add: (name: string) => void
}

export const AddTodo: React.FC<AddTodoProps> = ({name, setName, add}) =>
 { 
     const onClickHandler = ()=> { 
         add(name);
     }
     const onChangeHandler = (e: HandleChangeParam ) => {
         setName(e.currentTarget.value)
     }
     return (
         <div>
             <h3>Todo</h3>
             <div className={todoContainer}>
             <input value={name}
                onChange={onChangeHandler}
                className={todoName}
                placeholder={"enter todo name"}
             />
             <button onClick={onClickHandler}>Add</button>
             </div>
         </div>
     )
 }