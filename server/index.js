const express = require('express')
const app = express()

// Setting up route, fetching Name array and displaying. 
app.get("/api", (request, response) => {
    response.json({"names": ["nameOne", "nameTwo", "nameThree"] })
})

// Server listening on port 5000, client running on port 3000.  
app.listen(5000, () => { console.log("Server started on 5000") })