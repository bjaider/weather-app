const initialState = localStorage.getItem('woeid') || 368148
const city = (state = initialState, action) => {
  switch (action.type) {
    case 'changeCity': {
      return action.payload
    }

    default:
      return state
  }
}

export default city
