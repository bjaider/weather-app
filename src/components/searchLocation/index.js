import React from 'react'
import './style.scss'
import {Button} from 'antd'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import GpsFixedIcon from '@material-ui/icons/GpsFixed'

import changeSidebarState from '../../actions/changeSidebarState'


const SearchLocation = (props) => {
  const {changeSidebarState, sidebarState} = props
  return (
    <div className="search-location-container">
      <Button className="search-location-button" onClick={()=>changeSidebarState(!sidebarState)}>
        Seach for places
      </Button>
      <Button className="current-location-button">
        <GpsFixedIcon style={{margin: 0}} />
      </Button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  sidebarState: state.sidebarState,
})

const mapDispatchToProps = {
  changeSidebarState,
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchLocation),
)
