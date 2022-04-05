import React from 'react'

const Game = () => {
  return (
    <div className="flex flex-col h-4/6 p-12  items-center justify-center ">
  
     
        
        <select className="mb-4 py-5 w-64 bg-white  outline-none text-center  accent_color rounded-2xl " name="Select The Activity Category ">
          <option>Social</option>
          <option>Challenge</option>
          <option>Cooking</option>
          <option>Developing</option>
        </select>
        <button className="accent_bg py-4 w-64 text-center rounded-2xl font-bold shadow-green-200 shadow-sm text-white">Generate Activity</button>

    </div>
  )
}

export default Game;