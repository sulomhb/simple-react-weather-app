import { useState } from "react";
import LoadingSpinner from "../Loading/LoadingSpinner";
import useWeatherData from "../../hooks/useWeatherData";
import WeatherInformationCard from "./WeatherInformationCard";

function Card() {
  // City name is from user input
  const [cityName, setCityName] = useState("");

  // Weather Response - Fetch is loading response - Could not get response - fetchWeatherData function
  const [weatherForecastResponse, isLoading, isError, fetchWeatherData] =
    useWeatherData();

  const createCards = () => {
    if (!weatherForecastResponse) {
      return null;
    }

    return <div className="flex flex-row gap-2 justify-center items-center">{weatherForecastResponse.daily.map((dayIndex, index) => {
      return (
        <WeatherInformationCard key={index}
          temperature={dayIndex.temp.day}
          humidity={dayIndex.humidity}
          windSpeed={dayIndex.windSpeed}
          description={dayIndex.weather[0].main}
        />
      );
    })}</div>
  };

  return (
    <div className="grid place-items-center m-10 bg-neutral-200 p-10 rounded">
      <div name="input-field" className="justify-center flex">
        {/* Get city - input field */}
        <input
          className="border-solid border-2 border-b-black mb-5 p-4 rounded"
          onChange={(event) => setCityName(event.target.value)}
          type="text"
          placeholder="City..."
        ></input>

        {/* Get city weather - submit button */}

        <button
          type="submit"
          className="bg-black text-slate-200 p-5 w-auto ml-2 rounded mb-5"
          onClick={() => fetchWeatherData(cityName)}
        >
          Fetch
        </button>
      </div>

      {/* Get city - input field */}
      <div>{isLoading ? <LoadingSpinner /> : createCards()}</div>
      <div>{isError ? "Failed to fetch weather data" : ""}</div>
    
</div>
  );
}

export default Card;
