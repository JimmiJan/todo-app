import React from 'react'
import Tables from './table'

 

const Profile = () => {
    const foo =(e)=>{
        console.log("name" + e)
    }

  return (
    <div>
    <Tables namess="Jam" city="Kaa" age={22} hell={foo} />    
    </div>
  )
}

export default Profile
