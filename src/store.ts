import { applyMiddleware, createStore } from 'redux'
import { reducer } from './reducers/reducer'
import { fetchPortcallsMiddleware } from './middleware/fetchPortcallsMiddleware'

export const store = createStore(reducer, applyMiddleware(fetchPortcallsMiddleware))