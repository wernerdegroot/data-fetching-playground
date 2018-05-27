import { combineReducers } from 'redux'
import { berthsReducer } from './berthsReducer'
import { portcallsReducer } from './portcallsReducer'
import { positionsReducer } from './positionsReducer'
import { filterReducer } from './filterReducer'

export const reducer = combineReducers({
  berths: berthsReducer,
  portcalls: portcallsReducer,
  positions: positionsReducer,
  filter: filterReducer
})