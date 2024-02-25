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
               <label> Add a birthday!:
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
                    <button type="submit">Add</button>
               </label>
           </div>
       </form>
        {birthday.map((birthday, index) => (
            <div key = {index}>
            {birthday.firstName} {birthday.lastName} : {birthday.date}
            <button onClick={() => handleDelete(index)}>Delete Birthday</button>
        </div>
        ))}
        {/* Displaying person's birthday input.*/}
       {/*{birthday && (
       <div>
           <h1>Birthday List:</h1>
           <p>Name: {person.firstName} {person.lastName}</p>
           <p>Birthdate: {person.date}</p>
       </div>
       )}*/}
   </div>
 )
}


export default List