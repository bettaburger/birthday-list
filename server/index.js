const express = require('express')
const app = express()


// Setting up route.
app.get("/api", (request, response) => {
    
    // Initialize names array. 
    response.json({"names": ["user"] }) 
    // Initalize date array.
    response.json({"dates": ["00/00/00"] })

})

// Server listening on port 5000, client running on port 3000.  
app.listen(5000, () => { console.log("Server started on 5000") })