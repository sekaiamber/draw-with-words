import { combineReducers } from 'redux'

import brushReducer from './reducers/brush'
import logReducer from './reducers/log'


export default combineReducers({
  brush: brushReducer,
  log: logReducer
})