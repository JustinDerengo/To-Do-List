import React from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm';
import {useNavigate} from 'react-router-dom';
import './ToDo.css'


//function takes the mapped objects and passes the JSX to app to make the core of the web page
const ToDoList = ({toDoList, handleToggle, addTask, handleRemove}) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="creature-entries">
                {toDoList.map(todo => {
                    return (
                        <div key={todo.id}>
                        <ToDo todo={todo} handleToggle={handleToggle} handleRemove={handleRemove} toDoList={toDoList}/>
                        <button onClick={() => handleRemove(todo.id)} className="remove">Remove</button>
                        </div>
                    )
                })}
            </div>
            <div>
                <ToDoForm addTask={addTask} />
            </div>
            <div>
                <button onClick={() => navigate ("/Encountered")} type='submit' class='btn'>View Completed</button>
            </div>
            <div><button onClick={() => navigate ("/")} type='submit' class='btn'>Sign Out</button></div>
        </div>
    );
};

export default ToDoList