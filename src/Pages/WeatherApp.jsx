import {  useState } from "react";
import { Search ,ArrowBigUpDash   } from 'lucide-react';
 const WeatherApp=()=>{
    //Hooks
    const [GetCity,SetCity]=useState('')
    const [GetWeatherData,SetWeatherData]=useState([])

   //Fetch Data From Weather Api
 const ShowCityData=()=>{
  
    const WEATHER_API_KEY=`https://api.openweathermap.org/data/2.5/weather?q=${GetCity}&appid=383f2bad0a724304284af8932de2aab0&units=metric`
    fetch(WEATHER_API_KEY).
    then((res)=>res.json()).
    then((data)=>{
    SetWeatherData([{Temp:Math.floor(data.main.temp),Name:data.name ,Condition:data.weather[0].main,Humidity:data.main.humidity ,WindSpeed:Math.floor(data.wind.speed),Icon:data.weather[0].icon}])
    }).catch((error)=>{
    console.log(error)
    })
   
  

    
   } 

    
    return(
    <>
    <div  >
     <h1 className="text-center text-3xl mt-3 font-bold text-white">Weather App</h1>

      <input type="text " className="border rounded-lg h-9 mt-5 w-[90%] ml-3 bg-white/15 text-white placeholder-white/70" placeholder="Type Here City Name" value={GetCity}  onChange={(e)=>{SetCity(e.target.value)}} onKeyDown={(e)=>{if(e.key==="Enter") ShowCityData() }}/>
     <button className="bg-white/25 hover:bg-white/40 text-white text-2xl w-20 h-10 bg-green-500 mt-2 rounded-2xl ml-24 text-white items-center text-center " onClick={ShowCityData}> <Search className="relative left-7"/></button>
    
<ul>
      {
      GetWeatherData.map((item)=>(
     <div key={item.NAME} className="listy-none">
        <li >
         { <img src={`https://openweathermap.org/img/wn/${item.Icon}@2x.png`} className="relative left-20 w-[120px] h-[120px]" alt="Icon Image" />
         }
      </li>
           <li className="text-center text-green-200 text-2xl relative bottom-5 right-1">
     {item.Condition}
      </li>
     <li className="text-5xl text-white text-center mt-4 ">
     {item.Temp}°C   
     <li className="text-4xl">
     {item.Name}
     </li>
     </li>
 
   
      
     <div className="flex flex-row ">
     <li className="text-xl mt-10 text-white">
  
 <div className="flex flex-col ml-4">
 <li className="text-center">
      {item.Humidity + "%"} 
   </li>   
   <li>
       Humidity 
      </li> 
   
 </div>
    
     </li>
     <li className="text-xl mt-10 text-white ml-20  ">
    <div className="flex">
       {item.WindSpeed + "km/h"}  <ArrowBigUpDash  /></div> WindSpeed  
     </li>
     </div>
    </div>
     ))} 

      </ul>
    </div> 
    </>)
}

export default WeatherApp;