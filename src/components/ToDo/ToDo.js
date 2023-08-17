
import React from 'react'
import './ToDo.css'


//function just maps each object in the bestiary to be returned to ToDoList.js, handles the toggle of encountered or not by changing the class name
//based on if the encountered property is true or not
const ToDo = ({todo, handleToggle,}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    return (
        <div id={todo.id} onClick={handleClick} className={todo.encountered ? "highlight" : "dimmed"}>
           {todo.creature}
           <img src={todo.img} className="creature-img" alt={todo.creature}/>
            <div>{todo.description}</div>
        </div>
    )
}

export default ToDo