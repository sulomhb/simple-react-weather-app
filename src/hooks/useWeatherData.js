import { useState } from "react";
import { fetchWeatherForecast } from "../api/weatherForecast";

export default function useWeatherData() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [weatherResponse, setWeatherResponse] = useState(undefined);

  const fetchData = async (cityName) => {
    setIsLoading(true);
    setIsError(false);

    try {
      setWeatherResponse(await fetchWeatherForecast(cityName));
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return [weatherResponse, isLoading, isError, fetchData];
}
