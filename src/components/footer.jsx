import React from 'react'
const FooterCard = (props) => {
    console.log(props)
  return (
    <div>
       <p style={{color:"White"}}>
           {props.icon}       </p>
       <p style={{color:"White"}}>
         {props.value}
       </p>
    </div>
  )
}

export default FooterCard
