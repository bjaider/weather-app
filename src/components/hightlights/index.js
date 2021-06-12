import React from 'react'
import './style.scss'
import HightlightsCards from '../hightlightsCards'
const Hightlights = () => {
  return (
    <div className="hightlights-container">
      <HightlightsCards
        title="Wind status"
        content="7"
        unit="mph"
        bottomContent="WSW"
      />
      <HightlightsCards
        title="Humidity"
        content="84"
        unit="%"
        bottomContent="WSW"
      />
      <HightlightsCards title="Visibility" content="6,4 " unit="miles" />
      <HightlightsCards title="Air Pressure" content="998 " unit="mb" />
    </div>
  )
}

export default Hightlights
