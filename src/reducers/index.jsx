import { combineReducers } from 'redux'
import counterReducers from './counters';
import loggedReducers from './isLogged'

const allReducers=combineReducers({
    counter: counterReducers,
    logged: loggedReducers
})

export default allReducers;