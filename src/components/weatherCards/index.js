import moment from 'moment'
import React from 'react'
import './style.scss'
const WeatherCard = ({date, state, max, min, data}) => {
  return (
    <div className="weather-card-container">
      {data.consolidated_weather.map((item, index) => {
        if (index !== 0) {
          return (
            <div key={item.id} className="card">
              <p>
                {index === 1
                  ? 'Tomorrow'
                  : moment(item.applicable_date).format('ddd, MMM DD')}
              </p>
              <img src={`${process.env.REACT_APP_STATE_IMAGES}/${item.weather_state_abbr}.svg`} alt="" />
              <div className="temperature">
                <p>{`${Math.round(item.max_temp)}°C`}</p>
                <p>{`${Math.round(item.min_temp)}°C`}</p>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default WeatherCard
