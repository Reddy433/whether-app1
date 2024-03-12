const API_KEY = "8ff6b1c427824112b02b9f92f1485bbb";

const fetchWeather = async (city, country) => {
  const apiUrl = `https://api.weatherbit.io/v2.0/current?city=${city}+${country}&key=${API_KEY}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.data[0]; // Assuming the API response contains an array of weather data and we're taking the first element
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export default fetchWeather;
