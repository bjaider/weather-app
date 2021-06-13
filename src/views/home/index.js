import React, {useEffect} from 'react'
import './style.scss'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import CurrentWeather from '../../components/currentWeather'
import WeatherDetails from '../../components/weatherDetails'

import findCurrentLocation from '../../actions/findCurrentLocation'
import changeSidebarState from '../../actions/changeSidebarState'

const Home = (props) => {
  const {findCurrentLocation, sidebarState} = props
  useEffect(() => {
    findCurrentLocation()
  }, [])
  return (
    <div className="home-container">
      {sidebarState ? <CurrentWeather /> : 'juanhsdjjnasd'}
      <WeatherDetails />
    </div>
  )
}

const mapStateToProps = (state) => ({
  sidebarState: state.sidebarState,
})

const mapDispatchToProps = {
  findCurrentLocation,
  changeSidebarState,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
