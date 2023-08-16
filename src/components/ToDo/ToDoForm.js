import React, {useState} from 'react'

const ToDoForm = ({ addTask }) => {

    const [ userCreature, setUserCreature ] = useState('');
    const [ userDescription, setUserDescription] = useState('');

    const handleCreatureChange = (e) => {
        setUserCreature(e.currentTarget.value)
    }
    const handleDescriptionChange = (e) => {
        setUserDescription(e.currentTarget.value)
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userCreature, userDescription);
        setUserCreature("");
        setUserDescription("");
    }
    return (
        <div className="form-box">
            <form onSubmit={handleSubmit}>
                <input value={userCreature} type="text" onChange={handleCreatureChange} placeholder="Enter creature name"/>
                <input value={userDescription} type="text" onChange={handleDescriptionChange} placeholder='Enter creature description'/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ToDoForm;

