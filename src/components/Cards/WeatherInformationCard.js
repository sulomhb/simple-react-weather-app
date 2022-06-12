import React from "react";

function WeatherInformationCard({
  temperature,
  humidity,
  windSpeed,
  description,
  weekDay
}) {
  return (
    <div className="bg-white p-5 w-auto rounded shadow text-sm justify-start items-start">
      <h1 className="justify center items-center font-bold mb-2">{weekDay}</h1>
      <div>Temperature: {temperature}</div>
      <div>Humidity: {humidity}</div>
      <div>Wind Speed: {windSpeed} m/s</div>
      <div>Description: {description}</div>
    </div>
  );
}

export default WeatherInformationCard;
