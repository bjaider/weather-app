import React from 'react'
import Date from '../date'
import Location from '../location'
import Temperature from '../temperature'
import './style.scss'
const CurrentWeather = () => {
  return (
    <div className="current-weather-container">
      <Temperature temperature={15} weatherState={'Shower'} />
      <Date date={'Fri, 5 Jun'} />
      <Location city={'Helsinki'} />
    </div>
  )
}

export default CurrentWeather
