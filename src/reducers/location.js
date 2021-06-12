const location = (state = [], action) => {
  switch (action.type) {
    case 'findCurrentLocation': {
      return 'holi grupo'
    }

    default:
      return state
  }
}

export default location
