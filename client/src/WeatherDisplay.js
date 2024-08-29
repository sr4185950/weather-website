import React from 'react';
import { format } from 'date-fns';
import './css/WeatherDisplay.css'

function WeatherDisplay({ data }) {
  const hoursArr = data.forecast.forecastday[0].hour
  const timeIndex = hoursArr.findIndex(item => item.time === data.location.localtime.slice(0, 14) + "00")

  return (
    <div className='frame'>
      <div className="weather-display">
        {/* Displaying the location's name, country, and the formatted date and time */}
        <div className='title'>
          <h2>{data.location.name}</h2>
          <p>{data.location.country}</p>
          <p>{format(new Date(data.location.localtime.slice(0, 10)), 'dd/M/yy')} at {data.location.localtime.slice(11, 14) + "00"}</p>
        </div>
        {/* Displaying the current temperature and weather condition */}
        <div className="temperature">
          <span>{Math.floor(data.current.temp_c)}°</span>
          <p>{data.current.condition.text}</p>
        </div>
        {/* Displaying details about precipitation, humidity, and wind */}
        <div className="details">
          <div>
            <p>precipitation</p>
            <span>{data.current.precip_mm} mm</span>
          </div>
          <div>
            <p>humidity</p>
            <span>{data.current.humidity}%</span>
          </div>
          <div>
            <p>wind</p>
            <span>{data.current.wind_kph} km/h</span>
          </div>
        </div>
        {/* Displaying the forecast for the hours surrounding the current time */}
        <div className="forecast">
          <div className="forecast-item">
            {timeIndex - 3 > 0 && <p>{hoursArr[timeIndex - 3].time.slice(11)} <br /> &nbsp;
              <p className='temp'>{Math.floor(hoursArr[timeIndex - 3].temp_c)}°</p></p>}
          </div>
          <div className="forecast-item">
            {timeIndex - 2 > 0 && <p>{hoursArr[timeIndex - 2].time.slice(11)} <br />  &nbsp;
              <p className='temp'>{Math.floor(hoursArr[timeIndex - 2].temp_c)}°</p></p>}
          </div>
          <div className="forecast-item">
            {timeIndex - 1 > 0 && <p>{hoursArr[timeIndex - 1].time.slice(11)} <br />  &nbsp;
              <p className='temp'>{Math.floor(hoursArr[timeIndex - 1].temp_c)}°</p></p>}
          </div>
          <div className="forecast-item">
            <p>{hoursArr[timeIndex].time.slice(11)} <br />  &nbsp;
              <p className='temp'>{Math.floor(hoursArr[timeIndex].temp_c)}°</p></p>
          </div>
          <div className="forecast-item">
            {timeIndex + 1 < hoursArr.length && <p>{hoursArr[timeIndex + 1].time.slice(11)} <br />  &nbsp;
              <p className='temp'>{Math.floor(hoursArr[timeIndex + 1].temp_c)}°</p></p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
