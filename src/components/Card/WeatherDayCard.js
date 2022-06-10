import { useState } from "react";
import useWeatherData from "../../hooks/useWeatherData";

function Card() {
  // City name is from user input
  const [cityName, setCityName] = useState("");
  const [weatherForecastResponse, isLoading, isError, fetchWeatherData] =
    useWeatherData();

  return (
    <div className="grid place-items-center m-10 bg-neutral-200 p-10 rounded">
      <div name="input-field" className="justify-center flex">
        <input
          className="border-solid border-2 border-b-black mb-5 p-4 rounded"
          onChange={(event) => setCityName(event.target.value)}
          type="text"
          placeholder="City..."
        ></input>
        <button
          type="submit"
          className="bg-black text-slate-200 p-5 w-auto ml-2 rounded mb-5"
          onClick={() => fetchWeatherData(cityName)}
        >
          Fetch
        </button>
      </div>
      <div>{JSON.stringify(weatherForecastResponse ? weatherForecastResponse.daily[0].temp.day : "")}</div>
      <div>Temperature ({isLoading ? "Loading..." : "DOne!"}):</div>
      <div>isError: {JSON.stringify(isError)}</div>
    </div>
  );
}

export default Card;
