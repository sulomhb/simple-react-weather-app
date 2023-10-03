import { useState } from "react";
import LoadingSpinner from "../Loading/LoadingSpinner";
import useWeatherDataDailyForecast from "../../hooks/useWeatherDataDailyForecast";
import WeatherInformationCard from "./WeatherInformationCard";
import { getWeekDayStringFromDayResponse } from "../../api/weatherForecast";

function WeatherInformationCards() {
  //////////////////////////////////////////////////////////// STATE ///////////////////////////////////////////////////////////////////
  // City name is from user input 
  const [cityName, setCityName] = useState("");
  // Weather Response - Fetch is loading response - Could not get response - fetchWeatherData function
  const [weatherForecastResponse, isLoading, isError, fetchWeatherData] =
    useWeatherDataDailyForecast();

  //////////////////////////////////////////////////////////// STATE - END ///////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////// FUNCTIONS ///////////////////////////////////////////////////////////////////

  // Create card with forecast for each day
  const createCardsForEachDay = () => {
    if (!weatherForecastResponse) {
      return null; // Do not create cards if there is no response.
    }
    const firstDayDetails = weatherForecastResponse.daily[0]; // Response for the first day.
    /* Create card for today's forecast, which is on top of the other days. */
    return (
      <>
        <div className="flex flew-row justify-center items-center mb-10">
          <WeatherInformationCard
            temperature={firstDayDetails.temp.day}
            humidity={firstDayDetails.humidity}
            windSpeed={firstDayDetails.wind_speed}
            description={firstDayDetails.weather[0].main}
            weekDay={getWeekDayStringFromDayResponse(firstDayDetails.dt)}
          />
        </div>

        {/* Row for other days card. The row has 6 columns with cards for the 6 next days.*/}
        <div className="flex flex-row gap-1">
          {weatherForecastResponse.daily
            .slice(1, weatherForecastResponse.daily.length - 1)
            .map((dayIndex, index) => {
              /* Create card for every other day */
              return (
                <WeatherInformationCard
                  key={index}
                  temperature={dayIndex.temp.day}
                  humidity={dayIndex.humidity}
                  windSpeed={dayIndex.wind_speed}
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

  if (!isError) {
    //////////////////////////////////////////////////////////// COMPONENT RETURNS IF FETCH IS SUCCESSFUL ///////////////////////////////////////////////////////////////////

    return (
      <div className="grid place-items-center m-10 bg-white">
        <div name="input-field" className="justify-center flex">
          {/* Get city - input field */}
          <input
            className="border-solid border-2 border-b-black mb-5 p-4 rounded"
            onChange={(event) => setCityName(event.target.value)}
            type="number"
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
        <div>{isLoading ? <LoadingSpinner /> : createCardsForEachDay()}</div>
      </div>
    );
    //////////////////////////////////////////////////////////// COMPONENT RETURNS END ///////////////////////////////////////////////////////////////////
  } else {
    //////////////////////////////////////////////////////////// COMPONENT RETURNS IF FETCH IS UNSUCCESSFUL ///////////////////////////////////////////////////////////////////
    return (
      <div className="grid place-items-center m-10 bg-white">
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

        <div>Failed to get weather forecast.</div>
      </div>
    );
    //////////////////////////////////////////////////////////// COMPONENT RETURNS ///////////////////////////////////////////////////////////////////
  }
}

export default WeatherInformationCards;
