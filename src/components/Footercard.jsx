import React from 'react'
import Footer from "./footer"
function Footercard() {
    const val = "game"
  return (
    <div className='footr'>
      <Footer value={val} icon="fas fa-frown-open"  />
      <Footer value="gaming room"/>
      <Footer  value=" room"/>
      <Footer  value="gaming "/>

    </div>
  )
}

export default Footercard
