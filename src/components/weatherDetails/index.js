import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import DegreesConverter from '../degreesConverter'
import Hightlights from '../hightlights'
import WeatherCards from '../weatherCards'
import './style.scss'
const WeatherDetails = (props) => {
  const {location} = props
  const [data, setData] = useState(null)
  useEffect(() => {
    setData(location)
  }, [location])
  if (!data) {
    return 'Cargando...'
  }
  return (
    <div className="weather-details-container">
      <DegreesConverter />
      <WeatherCards
        state={
          'https://res.cloudinary.com/dhxg3zyjz/image/upload/v1623419204/weather-app/Sleet_uw6m6i.png'
        }
        data={data}
      />
      <h1>Today’s Hightlights </h1>
      <Hightlights />
    </div>
  )
}

const mapStateToProps = (state) => ({
  location: state.location,
})

export default withRouter(connect(mapStateToProps)(WeatherDetails))
