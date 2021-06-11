import React from 'react'
import './style.scss'
import HightlightsCards from '../hightlightsCards'
const Hightlights = () => {
  return (
    <div className="hightlights-container">
      <h1>Today’s Hightlights </h1>
      <HightlightsCards />
    </div>
  )
}

export default Hightlights
