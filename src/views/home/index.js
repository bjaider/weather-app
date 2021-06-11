import React from 'react'
import CurrentWeather from '../../components/currentWeather'
import WeatherDetails from '../../components/weatherDetails'
import './style.scss'

const Home = () => {
  return (
    <div className="home-container">
      <CurrentWeather/>
      <WeatherDetails/>
    </div>
  )
}

export default Home
