
import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
//starter entries
import Bestiary from './components/Bestiary.json'
//components
import Header from './components/header/Header';
import SignUp from './components/SignUp/SignUp';
import ToDoList from './components/ToDo/ToDoList';
import Completed from './components/Completed/Completed';


function App() {
  const [ toDoList, setToDoList ] =useState(Bestiary);

//this function will look at what the current boolean of creature.encountered, and then set it to the opposite.
  const handleToggle = (id) => {
    let mapped = toDoList.map(creature => {
      return creature.id === Number(id) ? { ...creature, encountered: !creature.encountered } : { ...creature};
    });
    setToDoList(mapped);
  }

//function makes a copy of the set toDoList using ...(spread operator), and then inserts the new object
  const addTask = (userCreature, userDescription) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length +1, creature: userCreature, description: userDescription, encountered: true}];
    setToDoList(copy);
  }
//function will make a newToDoList by filtering out the id of the object who's remove button was clicked on
  const handleRemove = (id) => {
    const newToDoList = toDoList.filter((creature) => creature.id !== id)
    setToDoList(newToDoList)
  }

  
  return (
    <div className="App">

<Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}/>
          <Route path='/ToDoList' element={<ToDoList toDoList={toDoList} handleToggle={handleToggle} addTask={addTask} handleRemove={handleRemove}/>}/>
          <Route path='/Encountered' element ={<Completed toDoList={toDoList}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
