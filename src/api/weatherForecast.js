import weatherAPIConfig from "../weatherAPIConfig";


/* 
@returns {object} 

*/
export const getLatitudeAndLongtitudeGivenCityName = async (cityName) => {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${weatherAPIConfig.key}`;
    const fetchWeatherForecast = await fetch(URL);
      const weatherForecastJSON = await fetchWeatherForecast.json();
      return {
        lat: weatherForecastJSON.coord.lat, // Get latitude from response
        lon: weatherForecastJSON.coord.lon, // Get longtitude from response
      };
  }

  export const fetchWeatherForecast = async (cityName) => {
    const latlon = await getLatitudeAndLongtitudeGivenCityName(cityName);
    let allDaysURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latlon.lat}&lon=${latlon.lon}&exclude=current,minutely,hourly,alerts&appid=${weatherAPIConfig.key}&units=metric`;
    const fetchWeatherForecast = await fetch(allDaysURL);
    return await fetchWeatherForecast.json()
  }