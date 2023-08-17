
import React from 'react'
import './ToDo.css'

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