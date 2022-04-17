import React from 'react'
import Activeo from "../images/Activeo.svg"
const Header = () => {
  return (
    <div className="lg:justify-start justify-center px-5 lg:m-0 mb-8 flex flex-row ">
      <img alt="" src={Activeo} className="w-24"></img>
    </div>
  )
}

export default Header