import React from 'react'
import NearMeIcon from '@material-ui/icons/NearMe'
const HightlightsCards = ({title, content, unit, bottomContent}) => {
  return (
    <div className="cards">
      <h1>{title}</h1>
      <p>
        {content}
        <span>{unit}</span>
      </p>
      {bottomContent ? (
        <div>
          <span>
            <NearMeIcon />
          </span>
          <p>{bottomContent}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default HightlightsCards
