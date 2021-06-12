import React from 'react'
import './style.scss'
const HightlightsCards = ({title, content, unit, bottomContent}) => {
  return (
    <div className="cards">
      <h1>{title}</h1>
      <p>
        {content}
        <span>{unit}</span>
      </p>
      <div>
        <p>{bottomContent}</p>
      </div>
    </div>
  )
}

export default HightlightsCards
