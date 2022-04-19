import React from "react";


import Button from "./Button";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

let firstRender=true;

const Home = (props) => {  //({title})==(props.title)
    const [tasks, setTasks] = useState([]);
    
    const remove=(id)=>{  
        
        setTasks(tasks.filter(item => item.id !== id));
        
    };

    useEffect(( )=>{      
        const oldTasks=JSON.parse(localStorage.getItem("tasks"));
        if(oldTasks){setTasks(oldTasks);  }
        
      },[]);

    useEffect(( )=>{
        
        if(!firstRender){
            console.log("tasks are updated to:"+tasks);
            localStorage.setItem("tasks",JSON.stringify(tasks));             
        } 
        firstRender = false;
       
        

    },[tasks]); 

    

    const blue=()=>{
        const oldTasks=JSON.parse(localStorage.getItem("tasks"));
        setTasks(oldTasks); 
        
        //set background to blue
        //change blue is cool to blue is not cool
    }

    const render = () =>{
        return (<ul>{tasks.map((task, index) => {
            return <li data-value={index} key={index}>{task.name} <Button onClick={()=>{remove(task.id)}} color="red" text="remove"/></li>
        })}</ul>)
    }
    
    return (
        <>           
            <h1>Task manager</h1>
            
            <Link to="/AddTask"><Button color="green" text="add"/></Link> 
            
            <Button onClick={blue} color="blue" text="blue is cool"/>
            {render()}
        </>
    )
}


export default Home;