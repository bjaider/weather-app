import {Button, Input} from 'antd'
import React, {useEffect, useState} from 'react'
import CityList from '../cityList'
import './style.scss'
import {search} from '../../api/search'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import changeCity from '../../actions/changeCity'
import changeSidebarState from '../../actions/changeSidebarState'
import CloseIcon from '@material-ui/icons/Close'

const Search = (props) => {
  const {changeCity, changeSidebarState} = props
  const [location, setLocation] = useState('')
  const [data, setData] = useState([])
  /*   console.log(city)
  useEffect(() => {
    console.log(data)
  }, [data]) */
  const handleClick = () => {
    search(location).then((response) => setData(response))
  }
  return (
    <div className="search-container">
      <CloseIcon className="close-icon" onClick={(e)=>changeSidebarState(true)} />
      <div className="input-container">
        <input
          type="text"
          placeholder="Search location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button className="search-button" onClick={handleClick}>
          Search
        </Button>
      </div>
      <div className="list">
        {data.map((city) => (
          <CityList
            key={city.woeid}
            name={city.title}
            woeid={city.woeid}
            changeCity={changeCity}
          />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  city: state.city,
})

const mapDispatchToProps = {
  changeCity,
  changeSidebarState,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))
