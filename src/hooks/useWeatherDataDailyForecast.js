import { useState } from "react";
import { fetchWeatherDailyForecast } from "../api/weatherForecast";

export default function useWeatherData() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [weatherResponse, setWeatherResponse] = useState(undefined);

  const fetchData = async (cityName) => {
    setIsLoading(true);
    setIsError(false);

    try {
      setWeatherResponse(await fetchWeatherDailyForecast(cityName));
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return [weatherResponse, isLoading, isError, fetchData];
}
