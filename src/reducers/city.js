const initialState = localStorage.getItem('woeid')
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
