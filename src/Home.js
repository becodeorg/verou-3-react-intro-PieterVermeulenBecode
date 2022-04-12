import React from "react";
import Tasks from "./Tasks";
import PropTypes  from "prop-types";
import Button from "./Button";
import { useState } from 'react'

const Home = (props) => {  //({title})==(props.title)
    const onClick=()=>{
        console.log('click')
    }         
    const [tasks,setTasks]=useState([
        {
            id:1,
            text:"task1",
            reminder:false
        },{
            id:2,
            text:"task2",
            reminder:false
        }]);
    return (
        <>
           
            <h1>{props.title}</h1>
            <Tasks tasks={tasks}/>
            <Button onClick={onClick} color="green" text="add"/>
            <Button onClick={onClick} color="red" text="remove"/>
            <Button onClick={onClick} color="blue" text="blue is cool"/>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quas reiciendis aliquid doloremque cumque porro officiis quaerat quasi! Quasi provident atque dolore quae eligendi dolores aspernatur alias eos consequuntur quaerat. Ad corrupti dolore, voluptatem, nobis non amet quo voluptas ipsa, voluptatibus nam libero magnam! Atque non asperiores iste expedita molestiae, neque nisi illum eius soluta similique hic fugiat autem consequatur exercitationem numquam omnis eos dicta molestias harum, animi assumenda ab perspiciatis. Autem possimus delectus eligendi voluptatibus commodi nulla sequi, iste repellat at! Laboriosam assumenda, quaerat corrupti nam, aliquid ratione quidem perspiciatis sint inventore, qui ut sit necessitatibus vitae distinctio voluptatibus!</div>
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