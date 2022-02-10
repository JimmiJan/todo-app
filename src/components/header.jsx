import React from 'react'
import Img from "./logo/img.jpg"
import "./images.css"
const header = () => {
  return (
    <div className='headrmain'>
       <div className='images'>
         <img src={Img} alt="" />
       </div>
       <div className='links'>
           <ul>
               <li>Home</li>
               <li>About</li>
               <li>Description</li>
               <li>Contect</li>
           </ul>
       </div>
    </div>
  )
}

export default header
