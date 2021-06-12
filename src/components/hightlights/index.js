import React from 'react'
import './style.scss'
import HightlightsCards from '../hightlightsCards'
const Hightlights = ({data}) => {
  console.log(data)
  return (
    <div className="hightlights-container">
      <HightlightsCards
        title="Wind status"
        content="7"
        unit="mph"
        bottomContent={data.wind_direction_compass}
      />
      <HightlightsCards
        title="Humidity"
        content={data.humidity}
        unit="%"
        bottomContent="WSW"
      />
      <HightlightsCards
        title="Visibility"
        content={data.visibility.toFixed(2).toString().replace(/\./g, ',')}
        unit="miles"
      />
      <HightlightsCards
        title="Air Pressure"
        content={data.air_pressure}
        unit=" mb"
      />
    </div>
  )
}

export default Hightlights
