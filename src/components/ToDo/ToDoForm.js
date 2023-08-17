import React, {useState} from 'react'
// import axios from 'axios';


//function will handle input form to create a new entry in the bestiary. Once linked with a database, it will allow users to upload their own
//pictures as well
const ToDoForm = ({ addTask }) => {

    const [ userCreature, setUserCreature ] = useState('');
    const [ userDescription, setUserDescription] = useState('');
    // const [ userImage, setUserImage] =useState(null);

    const handleCreatureChange = (e) => {
        setUserCreature(e.currentTarget.value);
    }
    const handleDescriptionChange = (e) => {
        setUserDescription(e.currentTarget.value);
    }
    // const handleImageChange = (e) => {
    //     setUserImage(e.currentTarget.file[0]);
    // }
    // const handleImageUpload = () => {
    //     axios.post('');
    // }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userCreature, userDescription);
        setUserCreature("");
        setUserDescription("");
        // setUserImage("");
    }
    return (
        <div className="form-box">
            <form onSubmit={handleSubmit} className='form-fields'>
                <input className='form-input' value={userCreature} type="text" onChange={handleCreatureChange} placeholder="Enter creature name" required/>
                <input className='form-input' value={userDescription} type="text" onChange={handleDescriptionChange} placeholder='Enter creature description' required/>
                {/* <input className='form-input' value={userImage} type="file" onChange={handleImageChange} placeholder='Choose creature image' required/> */}
                <button className='form-submit'>Submit</button>
            </form>
        </div>
    );
};

export default ToDoForm;

