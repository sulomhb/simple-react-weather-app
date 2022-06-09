
import React from 'react'
import { useState } from "react";
import {getWeatherDescription, getWeatherHumidity, getWeatherTemperature, getWeatherWindSpeed, fetchWeatherForecast}  from '../../functions/fetchData'
import { weatherAPIConfig } from '../../weatherAPIConfig';

function Card() {

  let [cityName, setCityName] = useState("");
  let [weatherDescription, setweatherDescription] = useState("");
  let [weatherTemperature, setweatherTemperature] = useState("");
  let [weatherWindSpeed, setweatherWindSpeed] = useState("");
  let [weatherHumidity, setweatherHumidity] = useState("");
  
  const setWeatherInfo = async (test) => {
    let weatherForecastJSON = await fetchWeatherForecast(test);
    let weatherDescription = await getWeatherDescription(weatherForecastJSON);
    let weatherTemperature = await getWeatherTemperature(weatherForecastJSON);
    let weatherWindSpeed = await getWeatherWindSpeed(weatherForecastJSON);
    let weatherHumidity = await getWeatherHumidity(weatherForecastJSON);
    setweatherDescription(weatherDescription);
    setweatherTemperature(weatherTemperature);
    setweatherWindSpeed(weatherWindSpeed);
    setweatherHumidity(weatherHumidity);
  }
    
    return (
    <div className='grid place-items-center m-10 bg-indigo-400 p-10 rounded'>
        <input className = 'border-solid border-2 border-b-black mb-5 p-4 rounded' onChange={(event) => (setCityName(event.target.value))} type ='text' placeholder='City...'></input>
        <button type="submit" className = "bg-black text-slate-200 p-5 rounded mb-5 w-auto" onClick = {() => {setWeatherInfo(cityName)}}>Search</button>
        
        <div>City: {cityName}</div>
        <div>Description: {weatherDescription}</div>
        <div>Temperature: {weatherTemperature}</div>
        <div>Wind Speed: {weatherWindSpeed}</div>
        <div>Humidity: {weatherHumidity}%</div>

    </div>
  )
}

export default Card;
