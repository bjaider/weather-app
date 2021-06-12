const location = (state = [], action) => {
  switch (action.type) {
    case 'findCurrentLocation': {
      return action.payload
    }

    default:
      return state
  }
}

export default location
