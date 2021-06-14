import React from 'react'
import './style.scss'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
const CityList = (props) => {
  const {name, woeid, changeCity} = props
  const handleClick = (id) => {
    localStorage.setItem('woeid', id)
    changeCity(id)
  }
  return (
    <div
      key={woeid}
      className="city-list-container"
      onClick={() => handleClick(woeid)}
    >
      <p>{name}</p>
      <ArrowForwardIosIcon
        style={{width: '15px', height: '15px', fill: '#616475'}}
      />
    </div>
  )
}

export default CityList
