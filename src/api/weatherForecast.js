import weatherAPIConfig from "../weatherAPIConfig";


/* 
@returns {object} 

*/
export const getLatitudeAndLongtitudeGivenCityName = async (cityName) => {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${weatherAPIConfig.key}`;
    const fetchWeatherDailyForecast = await fetch(URL);
      const weatherForecastJSON = await fetchWeatherDailyForecast.json();
      return {
        lat: weatherForecastJSON.coord.lat, // Get latitude from response
        lon: weatherForecastJSON.coord.lon, // Get longtitude from response
      };
  }

  export const fetchWeatherDailyForecast = async (cityName) => {
    const latlon = await getLatitudeAndLongtitudeGivenCityName(cityName);
    let dailyForecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latlon.lat}&lon=${latlon.lon}&exclude=current,minutely,hourly,alerts&appid=${weatherAPIConfig.key}&units=metric`;
    const fetchWeatherDailyForecast = await fetch(dailyForecastURL);
    return await fetchWeatherDailyForecast.json()
  }

  export const fetchWeatherHourlyForecast = async (cityName) => {
    const latlon = await getLatitudeAndLongtitudeGivenCityName(cityName);
    let hourlyForecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latlon.lat}&lon=${latlon.lon}&exclude=current,minutely,daily,alerts&appid=${weatherAPIConfig.key}&units=metric`;
    const fetchWeatherHourlyForecast = await fetch(hourlyForecastURL);
    return await fetchWeatherHourlyForecast.json()
  }

  export const getWeekDayStringFromDayResponse = (dt) => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let unixEpochToday = new Date(dt * 1000).getUTCDay(); // Returns the number of the weekday, e.g:  6 = Saturday.
    const todayIsWeekDay = weekday[unixEpochToday]; // The weekday string we get from weekday array.
    return todayIsWeekDay;
  };

  export const getHourFromResponse = (dt) => {

    let unixEpochToHour = new Date(dt * 1000).getHours(); // Returns the number of the weekday, e.g:  6 = Saturday.
    return unixEpochToHour;
  };