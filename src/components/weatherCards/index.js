import React from 'react'
import './style.scss'
const WeatherCard = ({date, state, max, min}) => {
  return (
    <div className="weather-card-container">
      <div className="card">
        <p>{date}</p>
        <img src={state} alt="" />
        <div className="temperature">
          <p>{max}</p>
          <p>{min}</p>
        </div>
      </div>
      <div className="card">
        <p>{date}</p>
        <img src={state} alt="" />
        <div className="temperature">
          <p>{max}</p>
          <p>{min}</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
