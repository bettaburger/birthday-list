import React, { useState, useEffect } from 'react'
import styles from "../styles/listItem.css"
import axios from 'axios'
import useLocalStorage from '../Hook/useLocalStorage';

function List() {

   // Define variables.
    const [firstName, setFirstName] = useState('');      // First names.
    const [lastName, setLastName] = useState('');        // Last names.
    const [date, setDate] = useState('');                // Dates.
    const [birthday, setBirthday] = useState([]);        // Birthday items.
    const [warning, setWarning] = useState('');          // No input warning.
    const [add, setAdd] = useState('');                  // Birthday has been added. 
    const [persistedBirthdays, setPersistedBirthdays] = useLocalStorage('birthday', []);
    
    // Update persistedBirthdays state when localStorage changes.
    useEffect(() => {
        setPersistedBirthdays(birthday);
    }, [birthday, setPersistedBirthdays]);

    // Load birthdays from localStorage when component mounts.
    useEffect(() => {
        if (persistedBirthdays && persistedBirthdays.length > 0) {
            setBirthday(persistedBirthdays);
        }
    }, [persistedBirthdays]);


    const axiosPostData = async() => {
        const postData = {
            firstName: firstName,
            lastName: lastName,
            date: date
        } 
        await axios.post('http://localhost:5000/handler', postData)
        .then(response => setAdd(<p style={{ color: '#A6C28B' }}>{response.data}</p>))   
    }

    // Handle submit and prevent page default submit button refresh.
    const handleSubmit = (e) => {
            e.preventDefault();
            if (firstName === '' || lastName === '' || date === '') {
                setWarning('Make sure to fill all fields.');
                return;
            } else {
                setBirthday([...birthday, { firstName, lastName, date }]);
                setFirstName('');
                setLastName('');
                setDate('');
                setWarning('');
                setAdd('');
                //console.info(birthday);
            }
            setAdd('');
            axiosPostData();
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
            </div>
        </form>

            <h4 style={{ color: '#a42525' }}>{warning}</h4>
            <h4>{add}</h4>
            {console.log(birthday)}

            {birthday.map((birthday, index) => (
                <div key = {index}>
                <h3> {birthday.firstName} {birthday.lastName}'s birthday is on 
                <span style ={{color: '#CBA52F'}}>
                &nbsp;{birthday.date}
                <button className={styles.deleteButton}
                type="delete" onClick={() => handleDelete(index)}></button>
                </span>
                </h3>
            </div>
            ))}
    </div>
    )}
    export default List