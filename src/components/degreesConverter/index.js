import React from 'react'
import './style.scss'
import {Button} from 'antd'
const DegreesConverter = () => {
  return (
    <div className="degrees-converter-container">
      <Button className="celsius active">°C</Button>
      <Button className="fahrenheit">°F</Button>
    </div>
  )
}

export default DegreesConverter
