import React from 'react'
import './style.scss'
const Temperature = ({temperature, weatherState}) => {
  console.log(temperature, weatherState)
  return (
    <div className="temperature-container">
      <div>
        <h1>{temperature}</h1>
        <span>°C</span>
      </div>
      <h3>{weatherState}</h3>
    </div>
  )
}

export default Temperature
