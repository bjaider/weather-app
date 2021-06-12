import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import location from '../reducers/location'
const reducers = combineReducers({
  location,
})

const store = createStore(reducers,applyMiddleware(thunk))

export default store
