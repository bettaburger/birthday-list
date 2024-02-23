import React, { useState } from 'react'
import './App.css'
import Time from './components/Time.js';

function App() {

  // Define variables
  const [person, setPerson] = useState({firstName:"", lastName:"", date:""});

  // Prevent page default submit button refresh
    function handleSubmit(e) {
      e.preventDefault();
      console.log(person);
    }

  
  return (
    <div className="App">
      <h1>Birthday Tracker</h1>
      <Time/>
      {person.firstName} - {person.lastName} - {person.date}
      <form>
        <input
          onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
          type="text"
          value={person.firstName}
        />
        <input 
          onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
          type="text" 
          value={person.lastName}
        />
        <input 
          onChange={(e) => setPerson({ ...person, date: e.target.value })}
          type="text" 
          value={person.date}
        />
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  )
}



export default App