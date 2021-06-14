import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import location from '../reducers/location'
import sidebarState from '../reducers/sidebarState'
import city from '../reducers/city'
const reducers = combineReducers({
  location,
  sidebarState,
  city,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store
