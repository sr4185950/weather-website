import axios from 'axios'

// Function to fetch weather data for a given city
export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
    return response.data;
  } catch (err) {
    return null;
  }
};
