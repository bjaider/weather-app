import {location} from '../api/location'

const type = 'findCurrentLocation'

const getLocation = (result) => ({
  type,
  payload: result,
})

const findCurrentLocation = (id) => {
  return (dispatch) => {
    location(id).then((response) => {
      /* console.log(response.data) */
      dispatch(getLocation(response.data))
    })
  }
}

export default findCurrentLocation
