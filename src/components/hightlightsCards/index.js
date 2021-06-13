import React from 'react'
import NearMeIcon from '@material-ui/icons/NearMe'
import {Progress} from 'antd'
const HightlightsCards = ({
  title,
  content,
  unit,
  windBottomContent,
  humidityBottomContent,
}) => {
  return (
    <div className="cards">
      <h1>{title}</h1>
      <p>
        {content}
        <span>{unit}</span>
      </p>
      {windBottomContent ? (
        <div className="wind-direction">
          <span
            style={{
              transform: `rotate(${Math.round(windBottomContent[0]) - 45}deg)`,
              marginBottom: '10px',
            }}
          >
            <NearMeIcon />
          </span>
          <p>{windBottomContent[1]}</p>
        </div>
      ) : humidityBottomContent ? (
        <Progress
          style={{
            margin: '14px',
          }}
          showInfo={false}
          strokeColor="#FFEC65"
          percent={50}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default HightlightsCards
