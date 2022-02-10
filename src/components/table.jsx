import React from 'react'




    const Tables =({namess,city,age})=>{
     const full= "Pakistan"
    
  return (
    <div>
      <table style={{border :"1px solid red"}}>
          <thead>
              <tr>
                  <th>name</th>
                  <th>city</th>
                  <th>age</th>
                  
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>{namess}</td>
                  <td>{city}</td>
                  <td>{age}</td>
              </tr>
          </tbody>
      </table>

      <button onClick={()=>hell(full)}>Child Btn</button>
    </div>
  )
}

export default Tables
