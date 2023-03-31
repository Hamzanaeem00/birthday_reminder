import React, { useState } from 'react'
import data from './data'
import List from './List'

const Card = () => {
    const [usersBirthday, setUsersBirthday]= useState(data)
    console.log("usersBirthday==>", usersBirthday)
    const handleClick =()=>{
      setUsersBirthday([])
    
    }
  return (
    <main>
    <div className="container">
      <h3>{usersBirthday.length } Birthdays Today </h3>  
   <List usersBirthday={usersBirthday} />
   <button onClick={handleClick}>Clear All </button>
  </div>
  </main>
  )
}

export default Card
