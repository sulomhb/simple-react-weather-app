
import React from 'react'
import { weatherAPIConfig } from '../../weatherAPIConfig';


async function getWeather(cityName) {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${weatherAPIConfig.key}`
    try {
    const fetchWeatherForecast = await fetch(URL)
    const weatherForecastJSON = await fetchWeatherForecast.json()
    let result =  `
        description : ${weatherForecastJSON.weather[0].description},
        temp : ${weatherForecastJSON.main.temp},
        wind : ${weatherForecastJSON.wind.speed},
        humidity : ${weatherForecastJSON.main.humidity},
    `
    console.log(result)
    return result
    }
    catch (error) {
        console.log("Could not find given city");
        return "Could not find given city"
    }

    
}


function Row() {
    return (
    <div>
        <div>API-key: {weatherAPIConfig.key}</div>
    <div>Result: {getWeather("Skien")}</div>
    </div>
  )
}

export default Row;
