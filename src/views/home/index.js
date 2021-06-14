import React, {useEffect} from 'react'
import './style.scss'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import CurrentWeather from '../../components/currentWeather'
import WeatherDetails from '../../components/weatherDetails'

import findCurrentLocation from '../../actions/findCurrentLocation'
import changeSidebarState from '../../actions/changeSidebarState'
import Search from '../../components/search'

const Home = (props) => {
  const {findCurrentLocation, sidebarState, city} = props
  useEffect(() => {
    findCurrentLocation(city)
  }, [city])
  return (
    <div className="home-container">
      {sidebarState ? <CurrentWeather /> : <Search />}
      <WeatherDetails />
    </div>
  )
}

const mapStateToProps = (state) => ({
  sidebarState: state.sidebarState,
  city: state.city,
})

const mapDispatchToProps = {
  findCurrentLocation,
  changeSidebarState,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
