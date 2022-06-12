import React from "react";

function WeatherInformationCard({
  temperature,
  humidity,
  windSpeed,
  description,
  weekDay,
}) {
  return (
    // The card itself
    <div className="bg-neutral-200 grid grid-cols-2 gap-2 p-10">
      <div>
        <h1>
          <b>{weekDay}</b>
        </h1>
      </div>

      {/* description & weather-image */}
      <div>
        {/* cloud/sun picture dependent on weather description. If weather description = "Rain", use "rain.png" */}
        <img
          src={require(`../../assets/png/${description.toLowerCase()}.png`)}
          alt=""
          width="100"
          height="auto"
          className="fixed"
        />
      </div>

      {/* temperature logo & value*/}
      <div className="flex">
        <img
          src={require(`../../assets/png/temperature.png`)}
          alt="temperature logo"
          width="30"
          height="30"
        />
        <p>{temperature}°C </p>
      </div>

      <div></div>

      {/* cloud/sun picture dependent on weather description. If weather description = "Rain", use "rain.png" */}
      <div  className="flex">
        <img
          src={require(`../../assets/png/humidity.png`)}
          alt="humidity logo"
          width="30"
          height="30"
        />
        <p>{humidity}%</p>
      </div>

      <div></div>

      {/*wind speed logo and value*/}
      <div  className="flex">
        <img
          src={require(`../../assets/png/wind_speed.png`)}
          alt="wind speed logo"
          width="30"
          height="30"
        />
        <p>{windSpeed} m/s</p>
      </div>

      <div className="justify-end text-center font-bold">
        {/* weather description e.g "rain || clouds || clear*/}
        <h3>{description}</h3>
      </div>

    </div>

  /* COMPONENT END */
    
  );
}

export default WeatherInformationCard;
