import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WeatherDetails = () => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherbit.io/v2.0/current?city=${city}&key=8ff6b1c427824112b02b9f92f1485bbb`
        );
        const data = await response.json();
        setWeatherData(data.data[0]); // Assuming the data structure
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <div>
      {weatherData && (
        <div>
          <h2>Weather Details for {city}</h2>
          <p>Temperature: {weatherData.temp}</p> {/* Update property names */}
          <p>Humidity: {weatherData.rh}</p> {/* Update property names */}
          <p>Wind Speed: {weatherData.wind_spd}</p>{" "}
        
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
