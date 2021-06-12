import React/* , {useEffect, useState}  */from 'react'
import './style.scss'


import Date from '../date'
import Location from '../location'
import Temperature from '../temperature'
import WeatherStateImage from '../weatherStateImage'

/* import {location} from '../../api/location' */
import SearchLocation from '../searchLocation'

const CurrentWeather = () => {
/*   const [data, setData] = useState([])
  useEffect(() => {
    location()
  }, []) */
  return (
    <div className="current-weather-container">
      <SearchLocation />
      <WeatherStateImage
        url={
          'https://res.cloudinary.com/dhxg3zyjz/image/upload/v1623419204/weather-app/Shower_efwzcr.png'
        }
      />
      <Temperature temperature={15} weatherState={'Shower'} />
      <div>
        <Date date={'Fri, 5 Jun'} />
        <Location city={'Helsinki'} />
      </div>
    </div>
  )
}

export default CurrentWeather
