import React, { useState } from 'react';
import TodoInput from './todoInput';
import TodoButton from './todoButton';


const AddTodo = (props) => {
    const [ todoValue, setTodoValue ] = useState('');
    return(
        <>
            <TodoInput 
                value={todoValue}
                setValue={setTodoValue}
                addNewTask={() => { 
                    props.addNewTask(todoValue);
                    setTodoValue('');
                }}
            />
            <TodoButton
                 addNewTask={() => { 
                     props.addNewTask(todoValue);
                     setTodoValue('');
                    }}
            />
        </>
    );

};

export default AddTodo;