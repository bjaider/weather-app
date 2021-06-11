import React from 'react'
import './style.scss'

import LocationOnIcon from '@material-ui/icons/LocationOn'

const Location = ({city}) => {
  return (
    <div className="location-container">
      <LocationOnIcon style={{color: '#88869D'}} />
      <p>{city}</p>
    </div>
  )
}

export default Location
