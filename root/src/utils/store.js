import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import actionCreator from './actionCreator'

// middleware

import logMiddleware from './middlewares/log'

export default function() {
  return createStore(
    reducers,
    applyMiddleware(thunk, logMiddleware)
  )
}
