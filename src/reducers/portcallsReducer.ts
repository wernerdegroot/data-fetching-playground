import { defaultPortcalls, IPortcall } from '../state/IPortcall'
import { Action } from '../Action'
import { createCacheItemsReducer } from '../util/createCacheItemsReducer'
import { areEqual } from '../state/IFilter'

export const portcallsReducer = createCacheItemsReducer<string[], IPortcall[]>(
  'portcalls',
  areEqual,
  5
)