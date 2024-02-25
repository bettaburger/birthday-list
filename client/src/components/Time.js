import React from 'react'

function Time() {
    // Define variables. 
  const d = new Date()
  const daysInWeek = ['Sunday,', 'Monday,', 'Tuesday,', 'Wednesday,', 'Thursday,', 'Friday,', 'Saturday,'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  // Define getters
  const day = daysInWeek[d.getDay()]
  const month = months[d.getMonth()]
  const date = d.getDate()
  const year = d.getFullYear()

  return (
    <div className='times'>
        <div className='date'>
            <h2>Today is {day}</h2>
            <h2>{month}</h2>
            <h2>{date}</h2>
            <h2>{year}</h2>
        </div>
    </div>
  )
}

export default Time