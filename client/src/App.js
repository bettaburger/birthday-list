import React, { useEffect, useState } from 'react'

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
    <div>
      {(typeof backendData.names === 'undefined') ? ( // If no names, display loading. 
        <p>Loading...</p>

        // Otherwise, map name to each key p tag. 
      ): ( 
        backendData.names.map((name, i) => (
          <p key ={i}>{name}</p>
        ))
      )}
    </div>
  )
}

export default App