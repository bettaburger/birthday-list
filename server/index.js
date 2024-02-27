const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/handler.js')

const app = express()
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use('/', router);

const PORT = 5000
// Server listening on port 5000, client running on port 3000.  
const server = app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`) 
})