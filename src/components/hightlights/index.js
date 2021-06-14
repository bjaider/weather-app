import React from 'react'
import './style.scss'
import HightlightsCards from '../hightlightsCards'
const Hightlights = ({data}) => {
  console.log(data)
  return (
    <div className="hightlights-container">
      <HightlightsCards
        title="Wind status"
        content={Math.round(data.wind_speed)}
        unit=" mph"
        windBottomContent={[data.wind_direction, data.wind_direction_compass]}
      />
      <HightlightsCards
        title="Humidity"
        content={data.humidity}
        unit="%"
        humidityBottomContent={data.humidity}
      />
      <HightlightsCards
        title="Visibility"
        content={data.visibility.toFixed(2).toString().replace(/\./g, ',')}
        unit=" miles"
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
