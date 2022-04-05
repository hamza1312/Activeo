import React from 'react'
import { useState } from 'react';
import data from '../activities.json'
const Game = () => {
  // UseState Functions
  const getInitialValue = () => {
    const value = "social";
    return value;
  };
  const getInitialActivity = () =>{
    const activity = "Select A category and Click Generate!";
    return activity;
  }

  // Variables
  const [activity, setActivity] = useState(getInitialActivity);
  const [value, setValue] = useState(getInitialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
    
  };

  // Generating function with all of the logic
  var Generate = (e) =>{
    e.preventDefault()
      if(value == "social"){
        var act = data.social[Math.floor(Math.random() * data.social.length)]
        setActivity(act)
      }
      else if(value == "cooking"){
        var act = data.cooking[Math.floor(Math.random() * data.cooking.length)]
        setActivity(act)
      }
      else if(value == "sport"){
        var act = data.sport[Math.floor(Math.random() * data.sport.length)]
        setActivity(act)
      }
      else if(value == "development"){
        var act = data.development[Math.floor(Math.random() * data.development.length)]
        setActivity(act)
      }
  }
  return (
    <div className="flex flex-col h-4/6 p-12  items-center justify-center ">    
        <select onChange={handleChange} className="mb-4 py-5 lg:w-2/6 w-full bg-white  outline-none text-center  accent_color rounded-2xl " >
          <option value="social">Social</option>
          <option value="sport">Sport</option>
          <option value="cooking">Cooking</option>
          <option value="development">Developing</option>
        </select>
        <button onClick={Generate} className="outline-white accent_bg lg:w-2/6 w-full py-4  text-center rounded-2xl font-bold shadow-green-200 shadow-sm text-white">Generate Activity</button>
      <h1 className=" transition-all  mt-5 lg:w-2/6 w-full p-5 text-center text-xl font-black accent_border border-4 accent_color rounded-2xl">{activity}</h1>
    </div>
  )
}

export default Game;