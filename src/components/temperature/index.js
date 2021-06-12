import React from 'react'
import './style.scss'
const Temperature = ({temperature, weatherState}) => {
  return (
    <div className="temperature-container">
      <div>
        <p>{temperature}</p>
        <span>°C</span>
      </div>
      <p>{weatherState}</p>
    </div>
  )
}

export default Temperature
