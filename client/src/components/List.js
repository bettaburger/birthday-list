import React, { useState } from 'react'
import "../styles/listItem.css"

function List() {

   // Define variables.
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [date, setDate] = useState('');
   const [birthday, setBirthday] = useState([]);

   // Handle submit and prevent page default submit button refresh.
   const handleSubmit = (e) => {
       e.preventDefault();
       setBirthday([...birthday, { firstName, lastName, date }])
       setFirstName('');
       setLastName('');
       setDate('');
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