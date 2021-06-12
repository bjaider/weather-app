import React from 'react'
import './style.scss'
const WeatherStateImage = ({src}) => {
  console.log(src)
  return (
    <div className="weather-state-image-container">
      <img src={src} alt="Shower" />
    </div>
  )
}

export default WeatherStateImage
