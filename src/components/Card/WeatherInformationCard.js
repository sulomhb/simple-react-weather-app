import React from "react";

function WeatherInformationCard({
  temperature,
  humidity,
  windSpeed,
  description,
}) {
  return (
    <div className="bg-white p-5 w-auto rounded shadow mt-2">
      <div>Temperature: {temperature}</div>
      <div>Humidity: {humidity}</div>
      <div>Wind Speed: {windSpeed}</div>
      <div>Description: {description}</div>
    </div>
  );
}

export default WeatherInformationCard;
