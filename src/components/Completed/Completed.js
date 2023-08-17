import React from 'react'
import './Completed.css'
import {useNavigate} from 'react-router-dom';

//function will make a page that only displays creaturs that have been encountered by using an inline conditional to see if their 
//encountered property is true, and then pass the JSX code
const Completed = ({toDoList}) => {
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