import React from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm';
import './ToDo.css'



const ToDoList = ({toDoList, handleToggle, addTask, handleRemove}) => {
    return (
        <div>
            <div className="creature-entries">
                {toDoList.map(todo => {
                    return (
                        <div key={todo.id}>
                        <ToDo todo={todo} handleToggle={handleToggle} handleRemove={handleRemove} toDoList={toDoList}/>
                        <button onClick={() => handleRemove(todo.id)}>Remove</button>
                        </div>
                    )
                })}
            </div>
            <div>
                <ToDoForm addTask={addTask} />
            </div>
        </div>
    );
};

export default ToDoList