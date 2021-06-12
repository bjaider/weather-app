import {createStore, combineReducers} from 'redux'
import location from '../reducers/location'
const reducer = combineReducers({
  location,
})

const store = createStore(reducer)

export default store
