const express = require('express');
const router = express.Router();


// Take in client request and then send "person has been added message". 
// Console log the birthdays. 
router.post('/handler', (request, response) =>  {
    //const firstName = req.body.firstName
    //const lastName = req.body.lastName
    //const date = req.body.date
    const {firstName, lastName, date} = request.body
    console.log('Name: ' + firstName + ' ' + lastName + ' | Date: ' + date)
    response.send(firstName + ' ' + lastName + ' has been added!')
})



module.exports = router