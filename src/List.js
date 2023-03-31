import React from 'react'

const List = ({usersBirthday}) => {
  return (
    <>
      {usersBirthday?.map((user)=>{
        console.log("users data ==>", user)
         return(
            <div key={user.key} className='person'>
                <img src={user.image} alt={user.name} />
                <div className='name'>
                    <h4>{user.name}</h4>
                    <p>{user.age} years</p>
                </div>
            </div>
         )
})}
    </>
  )
}

export default List
