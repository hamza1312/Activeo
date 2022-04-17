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
  const getInitialImage =()=>{
    const image = ""
    return image;
  }
  
  // Variables
  const [activity, setActivity] = useState(getInitialActivity);
  const [image,setImage]= useState(getInitialImage)
  const [value, setValue] = useState(getInitialValue);
  var imgStyle =" bg-contain rounded-xl accent_border border-4"
  const handleChange = (e) => {
    setValue(e.target.value);
    
  };
  if(image === ""){
    imgStyle="bg-contain rounded-xl accent_border border-0"
  }
  
  var randomnum = 0;
  // Generating function with all of the logic
  var Generate = (e) =>{
    e.preventDefault()
      if(value === "social"){
        randomnum = Math.random()
        setImage(data.social_images[Math.floor(randomnum * data.social_images.length)])

        setActivity(data.social[Math.floor(randomnum * data.social.length)])

      
      }
      else if(value === "cooking"){
        randomnum = Math.random()
        setImage(data.cooking_images[Math.floor(randomnum * data.cooking_images.length)])
        setActivity(data.cooking[Math.floor(randomnum * data.cooking.length)])
      }
      else if(value === "sport"){
        randomnum = Math.random()
        setImage(data.sport_images[Math.floor(randomnum * data.sport_images.length)])
        setActivity(data.sport[Math.floor(randomnum * data.sport.length)])
      }
      else if(value === "development"){
        randomnum = Math.random()
        setImage(data.development_images[Math.floor(randomnum * data.development_images.length)])
        setActivity( data.development[Math.floor(randomnum * data.development.length)])
      }
  }
  return (
    <div className="flex flex-col h-4/6 p-3  items-center justify-center ">  
     <div className="flex flex-row items-center justify-center w-56 mt-8 ">
          <img alt=""className={imgStyle}src={image}></img>
        </div>
          
        <select onChange={handleChange} className="mb-2 mt-2 py-4 lg:w-2/6 w-full bg-white  outline-none text-center  accent_color rounded-2xl " >
          <option value="social">Social</option>
          <option value="sport">Sport</option>
          <option value="cooking">Cooking</option>
          <option value="development">Developing</option>
        </select>
       
        <button onClick={Generate} className="outline-white accent_bg lg:w-2/6 w-full py-3  text-center rounded-2xl font-bold shadow-green-200 shadow-sm text-white">Generate Activity</button>
      <h1 className=" transition-all  mt-2 lg:w-2/6 w-full p-5 text-center text-xl font-black accent_border border-4 accent_color rounded-2xl">{activity}</h1>
    </div>
  )
}

export default Game;
