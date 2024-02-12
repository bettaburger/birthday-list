const express = require('express')
const app = express()

let person; 

// Setting up route.
app.get("/api", (request, response) => {

    // Initialize names array. 
    response.json({"names": ["nameOne", "nameTwo", "nameThree"] }) 

    // Initalize date array.
    response.json({"dates": ["00/00/00", "00/00/00", "00/00/00"] })

    document.getElementById("myAdd").onClick = function() {
        person = document.getElementById("myText").value;
        console.log(person);
    
    }



})

// Server listening on port 5000, client running on port 3000.  
app.listen(5000, () => { console.log("Server started on 5000") })