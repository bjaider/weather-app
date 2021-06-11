import React from 'react'
import './style.scss'
const CurrentDate = ({date}) => {
  return (
    <div className="current-date-container">
      <p>Today</p>
      <span>•</span>
      <p>{date}</p>
    </div>
  )
}

export default CurrentDate
