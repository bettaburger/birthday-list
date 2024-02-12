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
      {(typeof backendData.names === 'undefined') ? ( // If no names, display loading. 
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