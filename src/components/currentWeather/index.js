import React from 'react'
import Temperature from '../temperature'
import './style.scss'
const CurrentWeather = () => {
  return (
    <div className="current-weather-container">
      <Temperature temperature={15} weatherState={'Shower'} />
    </div>
  )
}

export default CurrentWeather
