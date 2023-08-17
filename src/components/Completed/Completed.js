import React from 'react'
import './Completed.css'
import {useNavigate} from 'react-router-dom';

const Completed = ({toDoList, encounteredList, sortEncountered}) => {
    const navigate = useNavigate();
    const completeCreature = toDoList.map ((data) => (
        <div key={data.id} >
            {data.encountered === true &&
                <div className="highlight">
                    {data.creature}
                    <img src={data.img} className="creature-img" alt={data.creature}/>
                    <div>{data.description}</div>
                </div>   
            }
    </div>
    ))
    return (
        <div>
        <div className='creature-entries'>
            {completeCreature}
        </div>
        <button onClick={() => navigate ("/ToDoList")} type='submit' class='btn'>Back to Bestiary</button>
        </div>
    );
}

export default Completed