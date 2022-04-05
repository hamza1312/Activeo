import React from 'react'
import Activeo from "../images/Activeo.svg"
const Header = () => {
  return (
    <div className="p-6 flex flex-row justify-center items-center">
      <img src={Activeo} className="w-28"></img>
    </div>
  )
}

export default Header