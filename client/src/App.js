import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [ backendData, setBackendData ] = useState([{}]) // set variable to contain backendData.

  // Fetching backend api. 
  useEffect(() => {
    fetch("/api").then(
      // Retrieve response to jason, then set jason data response to backendData.
      response => response.json()  
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []) // Passing an array to run once. 

  return (
    <div className="App">
      <h1> My Birthday List </h1>

      <label>Enter Person's name: </label>
      <br></br>
      <input id="myName"></input>
      <button id="nameAdd">Add</button>

      <br></br>
      <br></br>

      <label>Enter Birthday date ex;[00/00/00]: </label> 
      <br></br>
      <input id="myText"></input>
      <button id="myAdd">Add</button>
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