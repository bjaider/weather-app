import React from 'react'
import './style.scss'
const WeatherStateImage = ({url}) => {
  return (
    <div className="weather-state-image-container">
      <img
        src={url}
        alt="Shower"
      />
    </div>
  )
}

export default WeatherStateImage
