import React from 'react'
import DegreesConverter from '../degreesConverter'
import WeatherCards from '../weatherCards'
import './style.scss'
const WeatherDetails = () => {
  return (
    <div className="weather-details-container">
      <DegreesConverter/>
      <WeatherCards
        date={'Tomorrow'}
        state={
          'https://res.cloudinary.com/dhxg3zyjz/image/upload/v1623419204/weather-app/Sleet_uw6m6i.png'
        }
        max={'16°C'}
        min={'11°C'}
      />
    </div>
  )
}

export default WeatherDetails
