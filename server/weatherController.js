const axios = require('axios');

const weatherController = {
  // Controller method to get weather data by city name
  getWeatherByCity: async (req, res) => {
    const { city } = req.query;
    if (!city) {
      return res.status(400).json({ error: 'City name is required' });
    }
    try {
      // Making a GET request to the external weather API with the provided city name and API key
      const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json`, {
        params: {
          key: process.env.WEATHER_API_KEY,
          q: city,
        },
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch weather data' });
    }
  }

}

module.exports = weatherController