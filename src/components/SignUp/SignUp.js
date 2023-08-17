
import React, {useState,setState} from 'react';
import './SignUp.css'
import {useNavigate, } from 'react-router-dom';

export default function SignUp() {

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleInputChange = (e) => {
        e.preventDefault();
        const {id, value} = e.target;
        if(id === "userName") {
            setUserName(value);
        }
        if(id === "email") {
            setEmail(value);
        }
        if(id === "password") {
            setPassword(value);
        }
    }
    
    const handleSubmit = () => {
        console.log(userName, email, password);
        navigate('/ToDoList')
    }

  return (

    <div className='form'>
        <div className='form-body'>
            <div className='userName'>
                <label className='form-label' for="userName">User Name</label>
                <input className='form-input' type='text' value={userName} onChange={(e) => handleInputChange(e)} id='userName' placeholder='Enter your User Name' required/>
            </div>
            <div className='email'>
                <label className='form-label' for='email'>Email Address</label>
                <input className='form-input' type='text' value={email} onChange={(e) => handleInputChange(e)}id='email' placeholder='Enter your Email Address' required/>
            </div>
            <div className='password'>
                <label className='form-label' for='password'>Password</label>
                <input className='form-input' type='password' value={password} onChange={(e) => handleInputChange(e)}id='password' placeholder='Enter your password' required/>
            </div>
        </div>
        <div class="footer">
            <button onClick={() => navigate ("/ToDoList")} type='submit' class='btn'>Sign Up</button>
        </div>
    </div>

  )
}