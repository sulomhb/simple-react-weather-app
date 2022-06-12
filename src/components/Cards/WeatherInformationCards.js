import { useState } from "react";
import LoadingSpinner from "../Loading/LoadingSpinner";
import useWeatherData from "../../hooks/useWeatherData";
import WeatherInformationCard from "./WeatherInformationCard";

function WeatherInformationCards() {
  //////////////////////////////////////////////////////////// STATE ///////////////////////////////////////////////////////////////////
  // City name is from user input
  const [cityName, setCityName] = useState("");
  // Weather Response - Fetch is loading response - Could not get response - fetchWeatherData function
  const [weatherForecastResponse, isLoading, isError, fetchWeatherData] =
    useWeatherData();

  //////////////////////////////////////////////////////////// STATE - END ///////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////// FUNCTIONS ///////////////////////////////////////////////////////////////////

  const getWeekDayStringFromDayResponse = (dt) => {
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

  // Create card with forecast for each day
  const createCards = () => {
    if (!weatherForecastResponse) {
      return null; // Do not create cards if there is no response.
    }

    const firstDayDetails = weatherForecastResponse.daily[0]; // Response for the first day.

    /* Create card for today's forecast, which is on top of the other days. */
    return (
      <>
        <div className="flex justify-center items-center">
          <WeatherInformationCard
            temperature={firstDayDetails.temp.day}
            humidity={firstDayDetails.humidity}
            windSpeed={firstDayDetails.windSpeed}
            description={firstDayDetails.weather[0].main}
            weekDay={getWeekDayStringFromDayResponse(firstDayDetails.dt)}
          />
        </div>

        {/* Row for other days card. The row has 6 columns with cards for the 6 next days.*/}
        <div className="flex flex-row gap-2 justify-center items-center mt-5">
          {weatherForecastResponse.daily
            .slice(1, weatherForecastResponse.daily.length - 1)
            .map((dayIndex, index) => {
              /* Create card for every other day */
              return (
                <WeatherInformationCard
                  key={index}
                  temperature={dayIndex.temp.day}
                  humidity={dayIndex.humidity}
                  windSpeed={dayIndex.windSpeed}
                  description={dayIndex.weather[0].main}
                  weekDay={getWeekDayStringFromDayResponse(dayIndex.dt)}
                />
              );
            })}
        </div>
      </>
    );
  };

  //////////////////////////////////////////////////////////// FUNCTIONS-END ///////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////// COMPONENT RETURNS ///////////////////////////////////////////////////////////////////

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

export default WeatherInformationCards;
