import React from 'react'
import Button from './Button'
import uniqueId from 'lodash/utility/uniqueId'
import { useState, useRef, useEffect } from 'react';

const AddTask = () => {
    const inputEl = useRef();
    const [tasks, setTasks] = useState([]);

    useEffect(( )=>{      
      const oldTasks=JSON.parse(localStorage.getItem("tasks"));
      if(oldTasks){setTasks(oldTasks);  }
      
    },[]);

    useEffect(( )=>{
          
      localStorage.setItem("tasks",JSON.stringify(tasks));      
    },[tasks]);   

    const onButtonClick = () => {   
      if(!inputEl.current.value)return
        setTasks(prevTasks => {
          return [...prevTasks,  {id:uniqueId() ,name:inputEl.current.value}]
        })
        
      
    };
    
  return (
    <div>
      <label htmlFor="newTask"></label>
      <input type="text" ref={inputEl} />
      <Button color="green" text="add task" onClick= {onButtonClick}/> 
      <ul>{tasks.map((task, index) => {
        return <li key={index}>{task.name}</li>
      })}</ul>
    </div>
  )
};

export default AddTask;