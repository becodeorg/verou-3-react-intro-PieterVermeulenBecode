import React from 'react'
import Button from './Button'
import { useState, useRef } from 'react';

const AddTask = () => {
    const inputEl = useRef(null);
    const onButtonClick = () => {
    const [count, setCount] = useState(0);
    if(localStorage.getItem("task")!=""){
        const prevTasks=localStorage.getItem.JSON.parse();
        let tasks=prevTasks.push(inputEl.current);
        localStorage.setItem("task",JSON.stringify(tasks));
    }else {
        let tasks=inputEl.current
        localStorage.setItem("task",JSON.stringify(tasks));
    };

    
    inputEl.current.focus();
  };
    
  return (
    <form action="">
        <label htmlFor="newTask"></label>
        <input ref={inputEl} type="text" />
        <Button color="green" onClick= {onButtonClick}/>
    </form>
  )
}

export default AddTask