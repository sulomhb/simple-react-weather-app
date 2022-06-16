import React from "react";
import useWeatherDataHourlyForecast from "../../hooks/useWeatherDataHourlyForecast";
import { getWeekDayStringFromDayResponse } from "../../api/weatherForecast";
import { getHourFromResponse } from "../../api/weatherForecast";

import LoadingSpinner from "../Loading/LoadingSpinner";

export default function HourlyForecastRow({ cityName }) {
  //////////////////////////////////////////////////////////// STATE ///////////////////////////////////////////////////////////////////

  const [weatherResponse, isLoading, isError, fetchData] =
    useWeatherDataHourlyForecast();

  const createRowWithForecast = () => {
    if (!weatherResponse) {
      return null;
    }

    return weatherResponse.hourly.map((hourIndex, index) => {
      return (
        <tr>
          <td key = {index} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {getWeekDayStringFromDayResponse(hourIndex.dt) + " "}
          </td>

          <td key = {index} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {getHourFromResponse(hourIndex.dt) + ":00"}
          </td>
          <td key = {index} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {hourIndex.temp}°C
          </td>
          <td key = {index} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {hourIndex.weather[0].main}
          </td>
          <td key = {index} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {hourIndex.humidity}%
          </td>
          <td key = {index} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {hourIndex.wind_speed} m/s
          </td>
        </tr>
      );
    });
  };

  if (!isError) {
    return (
      <div className="grid place-items-center m-10 bg-white">
        <button
          className="bg-black text-slate-200 p-5 w-auto ml-2 rounded mb-5"
          onClick={() => fetchData(cityName)}
        >
          Fetch all hours
        </button>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Day
                      </th>
                        <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Hour
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Temperature
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        {" "}
                        Humidity
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Wind Speed
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? <LoadingSpinner /> : createRowWithForecast()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
