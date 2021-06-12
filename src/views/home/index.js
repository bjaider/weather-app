import React from 'react'
import './style.scss'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import CurrentWeather from '../../components/currentWeather'
import WeatherDetails from '../../components/weatherDetails'

import findCurrentLocation from '../../actions/findCurrentLocation'

const Home = (props) => {
  const {findCurrentLocation, location} = props
  console.log(location)
  findCurrentLocation(1)
  return (
    <div className="home-container">
      <CurrentWeather />
      <WeatherDetails />
    </div>
  )
}

const mapStateToProps = (state) => ({
  location: state.location,
})

const mapDispatchToProps = {
  findCurrentLocation,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
/* export default Home */
