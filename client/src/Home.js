import React, { useState } from 'react';
import './css/Home.css';
import WeatherDisplay from './WeatherDisplay';
import Message from './Message';
import { fetchWeather } from './API';
import { format } from 'date-fns';

function Home() {
      const [error, setError] = useState(null);
      const [weatherData, setWeatherData] = useState(null);
      const [city, setCity] = useState('');

      // Function to handle form submission and fetch weather data
      const handleSubmit = async (e) => {
            e.preventDefault();
            const weatherData = await fetchWeather(city);
            setWeatherData(weatherData);
            setError(null)
            if (weatherData == null)
                  setError('City not found or other error');
      };

      return (
            <div className="app">
                  <div className="container">
                        <div className="left">
                              <div className='logo'></div>
                              <div className='leftContent'>
                                    <h1>Use our weather app to see the weather around the world</h1>
                                    <form onSubmit={handleSubmit}>
                                          <label>City name</label>
                                          <div className='input'>
                                                <input
                                                      type="text"
                                                      placeholder="City name"
                                                      value={city}
                                                      onChange={(e) => setCity(e.target.value)}
                                                      required
                                                />
                                                <button type="submit">Check</button>
                                          </div>
                                    </form>
                                    <p className="coordinates">
                                          {weatherData && <>latitude {weatherData.location.lat} &nbsp; &nbsp; longitude {weatherData.location.lon}<br />
                                                accurate to {format(new Date(weatherData.location.localtime.slice(0, 10)), 'dd/MM/yy')} at {weatherData.location.localtime.slice(11)} </>}
                                    </p>
                              </div>
                        </div>
                        <div className="right">
                              {/* Display error message if there is an error */}
                              {error && <Message message={error} />}
                              {/* Display weather data if available and no error */}
                              {!error && weatherData && <WeatherDisplay data={weatherData} />}
                        </div>
                  </div>
            </div>
      );
}

export default Home;
