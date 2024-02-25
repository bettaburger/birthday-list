import React, { useState } from 'react'

function List() {

    // Define variables.
    const [person, setPerson] = useState({
    firstName:"",
    lastName:"",
    date:""
    });

    // Handle submit and prevent page default submit button refresh.
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(person);
    }

    // Lays out the previous items and then the next item.
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPerson({...person, [name]: value})
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name: 
                    <input
                        type="first name"
                        name="first name"
                        value={person.firstName}
                        onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
                    />
                </label>
            </div>
            <div>
                <label>Last Name: 
                    <input
                        type="last name"
                        name="first name"
                        value={person.lastName}
                        onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
                    />
                </label>
            </div>
            <div>
                <label>Date: 
                    <input
                        type="date"
                        name="date"
                        value={person.date}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
        </form>

        {/* Displaying person's birthday input.*/}
        <div>
            <h2>Birthday List</h2>
            <p>Name: {person.firstName} {person.lastName}</p>
            <p>Birthdate: {person.date}</p>
        </div>   
    </div>
  )
}

export default List