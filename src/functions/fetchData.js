import { weatherAPIConfig } from "../weatherAPIConfig"

export async function fetchWeatherForecast(cityName) {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${weatherAPIConfig.key}`
    try {
    const fetchWeatherForecast = await fetch(URL)
    const weatherForecastJSON = await fetchWeatherForecast.json()
    return weatherForecastJSON
   }
    catch (error) {
        console.log("Could not find given city");
        return "Could not find given city"
    }
}

export function getWeatherDescription(weatherForecastJSON) {
    return weatherForecastJSON.weather[0].description;
}

export function getWeatherTemperature(weatherForecastJSON) {
    return weatherForecastJSON.main.temp
}

export function getWeatherWindSpeed(weatherForecastJSON) {
    return weatherForecastJSON.wind.speed;
}

export function getWeatherHumidity(weatherForecastJSON) {
    return weatherForecastJSON.main.humidity
}

