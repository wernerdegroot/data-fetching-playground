import { IPosition } from '../state/IPosition'
import { Action } from '../Action'
import { createCacheItemsReducer } from '../util/createCacheItemsReducer';
import { positionsCache } from '../caches/positionsCache';

export const positionsReducer = createCacheItemsReducer<string[], IPosition[]>(
  positionsCache.cacheId,
  positionsCache.keysAreEqual,
  5
)