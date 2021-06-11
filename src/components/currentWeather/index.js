import React from 'react'
import './style.scss'

import {Button} from 'antd'
import GpsFixedIcon from '@material-ui/icons/GpsFixed'

import Date from '../date'
import Location from '../location'
import Temperature from '../temperature'
import WeatherStateImage from '../weatherStateImage'

const CurrentWeather = () => {
  return (
    <div className="current-weather-container">
      <div className="search-places-location">
        <Button className="search-button">Seach for places</Button>
        <Button className="search-location">
          <GpsFixedIcon style={{margin:0}}/>
        </Button>
      </div>
      <WeatherStateImage url={"https://res.cloudinary.com/dhxg3zyjz/image/upload/v1623419204/weather-app/Shower_efwzcr.png"}/>
      <Temperature temperature={15} weatherState={'Shower'} />
      <Date date={'Fri, 5 Jun'} />
      <Location city={'Helsinki'} />
    </div>
  )
}

export default CurrentWeather
