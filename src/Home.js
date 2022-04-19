import React from "react";


import Button from "./Button";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

let firstRender=true;

const Home = (props) => {  //({title})==(props.title)
    const [tasks, setTasks] = useState([]);
    const [bgcolor,setbgcolor]=useState("yellow");
    const [nextcolor,setnextcolor]=useState("blue");
    
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

    useEffect(()=>{
        document.body.style = 'background: '+bgcolor+';';
        setnextcolor(randomColor())
    },[bgcolor])

    const randomColor=()=>{
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
    }
    

    

    const changeBackgroundColor=()=>{
        setbgcolor(nextcolor);
    }
    
    return (
        <>           
            <h1>Task manager</h1>
            
            <Link to="/AddTask"><Button color="green" text="add"/></Link> 
            
            <Button onClick={changeBackgroundColor} color="blue" text={nextcolor}/>
            <ul>{tasks.map((task, index) => {
                return <li data-value={index} key={index}>{task.name} <Button onClick={()=>{remove(task.id)}} color="red" text="remove"/></li>
            })}</ul>
        </>
    )
}


export default Home;