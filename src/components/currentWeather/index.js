import React from 'react'
import CurrentDate from '../currentDate'
import Temperature from '../temperature'
import './style.scss'
const CurrentWeather = () => {
  return (
    <div className="current-weather-container">
      <Temperature temperature={15} weatherState={'Shower'} />
      <CurrentDate date={'Fri, 5 Jun'}/>
    </div>
  )
}

export default CurrentWeather
