import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [ backendData, setBackendData ] = useState([{}]) // set variable to contain backendData.

  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const [displayName, setDisplayName] = useState(null);
  const [displayDate, setDisplayDate] = useState(null);

  const nameArray = [null];
  const nameDate = [null];

  // Log name.
  const nameChangeHandler = (i) => {
    setName(i.target.value);
    setDate(i.target.value);
    console.log(i.target.value);
    console.log(i.target.value);
  }

  // Log date.
  const dateChangeHandler = (i) => {
    setDate(i.target.value);
    console.log(i.target.value);
  }

  const nameHandler = (event) => {
    event.preventDefault();
    setDisplayName(name);
    setName("");
  }

  const dateHandler = (event) => {
    event.preventDefault();
    setDisplayDate(date);
    setDate("");
  }

  return (
    <div className="App">
      <h1>My-Birthday-Tracker</h1>
      
      <form onSubmit ={nameHandler}> 
        <label>Enter Name: </label>
        <input
          value={name}
          onChange={nameChangeHandler}
          />
          <button type="Add">Add</button>
      </form>
      
      <p></p>

      <form onSubmit={dateHandler}>
        <label>Enter Date: </label>
        <input
          value={date}
          onChange={dateChangeHandler}
          />
          <button type="Add">Add</button>
      </form>
      
      {displayName && (<p> Name: {displayName} </p>)}
      {displayDate && (<p> Birthday: {displayDate} </p>)}
      

      {(typeof backendData.names === 'undefined') ? (  // Catch no data. 
        <p>Loading...</p>

        // Otherwise, map name to each key p tag. 
      ): ( 
        backendData.names.map((name, key) => (
          <p key ={key}>{name}</p>
        ))
      )}
    </div>
  )
}

export default App