import React from "react";

import PropTypes  from "prop-types";
import Button from "./Button";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";


const Home = (props) => {  //({title})==(props.title)
    const [tasks, setTasks] = useState([]);
    
    const remove=(name)=>{
        setTasks(
            tasks.filter(function(jsonObject) {
                return jsonObject.name !== name;
            })
        );
    }

    const blue=()=>{
        const oldTasks=JSON.parse(localStorage.getItem("tasks"));
        setTasks(oldTasks); 
        console.log(oldTasks);
        //set background to blue
        //change blue is cool to blue is not cool
    }

    useEffect(( )=>{      
        const oldTasks=JSON.parse(localStorage.getItem("tasks"));
        if(oldTasks){setTasks(oldTasks);  }
        
      },[]);

    useEffect(( )=>{
        // if(tasks!==""){
        //     localStorage.setItem("tasks",JSON.stringify(tasks));      
        // }
    },[tasks]);
    
    return (
        <>           
            <h1>Task manager</h1>
            
            <Link to="/AddTask"><Button color="green" text="add"/></Link> 
            
            <Button onClick={blue} color="blue" text="blue is cool"/>
            <ul>{tasks.map((task, index) => {
                return <li key={index}>{task.name} <Button onClick={remove(task.name)} color="red" text="remove"/></li>
            })}</ul>
        </>
    )
}
Home.defaultProps={
    title:"Task Tracker"
}
Home.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Home;