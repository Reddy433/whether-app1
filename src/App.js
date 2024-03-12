import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import Dashboard from "./Dashboard";
import WeatherDetails from "./WeatherDetails";
import fetchWeather from "./weatherService";

function App() {
  const [weather, setWeather] = useState(null);

  const handleSubmit = async (city) => {
    try {
      const weatherData = await fetchWeather(city);
      setWeather(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        backgroundImage:
          'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmyMqNbUN3u7MeoqnQKcZ9qDPITh_0CawOA&usqp=CAU")', 
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Box
          bgcolor="rgba(255, 255, 255, 0.5)"
          p={4}
          borderRadius={8}
          textAlign="center"
        >
          <h1>Weather Forecast</h1>
          <Dashboard onSubmit={handleSubmit} />
          {weather && <WeatherDetails weather={weather} />}
        </Box>
      </Container>
    </div>
  );
}
export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import WeatherDetails from "./WeatherDetails";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/weather-details/:city" element={<WeatherDetails />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
