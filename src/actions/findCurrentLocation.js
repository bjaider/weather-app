import {location} from '../api/location'

const type = 'findCurrentLocation'

const getLocation = (result) => ({
  type,
  payload: result,
})

const findCurrentLocation = () => {
  return (dispatch) => {
    location(1).then((result) => {
      /* console.log(result) */
      dispatch(getLocation(result))
    })
  }
}

export default findCurrentLocation
