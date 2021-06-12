import React, {useEffect, useState} from 'react'
import './style.scss'

import Date from '../date'
import Location from '../location'
import Temperature from '../temperature'
import WeatherStateImage from '../weatherStateImage'
import SearchLocation from '../searchLocation'

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import moment from 'moment'

const CurrentWeather = (props) => {
  const {location} = props
  const [data, setData] = useState(null)
  useEffect(() => {
    setData(location)
  }, [location])

  if (!data) {
    return 'Cargando...'
  }

  return (
    <div className="current-weather-container">
      <SearchLocation />
      <WeatherStateImage
        src={`${process.env.REACT_APP_STATE_IMAGES}/${data.consolidated_weather[0].weather_state_abbr}.svg`}
      />
      <Temperature
        temperature={Math.round(data.consolidated_weather[0].the_temp)}
        weatherState={data.consolidated_weather[0].weather_state_name}
      />
      <div>
        <Date
          date={moment(data.consolidated_weather[0].applicable_date).format(
            'ddd, MMM DD',
          )}
        />
        <Location city={data.title} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  location: state.location,
})

export default withRouter(connect(mapStateToProps)(CurrentWeather))
/* export default CurrentWeather */
