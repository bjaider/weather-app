import React from 'react'
import './style.scss'
const Date = ({date}) => {
  return (
    <div className="current-date-container">
      <p>Today</p>
      <span>•</span>
      <p>{date}</p>
    </div>
  )
}

export default Date
