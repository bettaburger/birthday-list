import React, { useState } from 'react'
import "../styles/listItem.css"

function List() {

   // Define variables.
   const [firstName, setFirstName] = useState('');      // First names
   const [lastName, setLastName] = useState('');        // Last names
   const [date, setDate] = useState('');                // Dates
   const [birthday, setBirthday] = useState([]);        // Birthday array
   const [warning, setWarning] = useState('');          // No input. 

   // Handle submit and prevent page default submit button refresh.
   const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName === '' || lastName === '' || date === '') {
            setWarning('Make sure to fill all fields.');
            return;
        } else {
       setBirthday([...birthday, { firstName, lastName, date }])
       setFirstName('');
       setLastName('');
       setDate('');
       setWarning('');
        }
    }

   // Creating a new array excluding the person to be deleted
   // Updates the list of birthdays. 
   const handleDelete = (person) => {
    const updatedBirthday = birthday.filter((_, currentPerson) => currentPerson !== person); 
    setBirthday(updatedBirthday);
   }

   // Change handlers
   const handleFirstName = (e) => {
    setFirstName(e.target.value);
   }
   const handleLastName = (e) => {
    setLastName(e.target.value);
   }
   const handleDate = (e) => {
    setDate(e.target.value);
   }

 return (
   <div>
       <form onSubmit={handleSubmit}>
           <div>
               <label> Track your friends or family birthdays, start by adding a person below!
                <p></p>
                   <input
                       type="text"
                       placeholder="First Name"
                       value={firstName}
                       onChange={handleFirstName} 
                    />
                    <input
                       type="text"
                       placeholder="Last Name"
                       value={lastName}
                       onChange={handleLastName} 
                    />
                    <input
                       type="date"
                       value={date}
                       onChange={handleDate} 
                    />
                    <button type="add">Add</button>
               </label>
           </div>
       </form>
       {warning && <p style={{ color: 'red' }}>{warning}</p>}
        {birthday.map((birthday, index) => (
            <div key = {index}>
            <h3> {birthday.firstName} {birthday.lastName} : {birthday.date} 
            <button type="delete" onClick={() => handleDelete(index)}></button>
            </h3>
        </div>
        ))}
   </div>
 )
}


export default List