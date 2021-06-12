import React from 'react'
import {Button} from 'antd'
import GpsFixedIcon from '@material-ui/icons/GpsFixed'
import './style.scss'
const SearchLocation = () => {
  return (
    <div className="search-location-container">
      <Button className="search-location-button">Seach for places</Button>
      <Button className="current-location-button">
        <GpsFixedIcon style={{margin: 0}} />
      </Button>
    </div>
  )
}

export default SearchLocation
