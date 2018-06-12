import { flatten } from '../util/utils'
import { createSelector } from "reselect";
import { asyncPortcallsSelector } from "./asyncPortcallsSelector";
import { positionsCache } from "../caches/positionsCache";
import { defaultPositions } from "../state/IPosition";
import { flatMap } from '../util/Results';

export const asyncShipLocationsSelector = createSelector(
  asyncPortcallsSelector,
  positionsCache.selector,
  (asyncPortcalls, positionsCacheItems) => {
    return flatMap(asyncPortcalls, portcalls => {
      const ids = portcalls.map(p => p.id)
      return positionsCacheItems
        .getFor(ids)
        .orElse(() =>
          new Promise(resolve => {
            console.log('Fetching ship locations', ids)
            setTimeout(() => {
              const positionsThatMatchFilter = defaultPositions.filter(position =>
                ids.some(id => id === position.portcall)
              )
              console.log('Done fetching ship locations', ids)
              resolve(positionsThatMatchFilter)
            }, 5000)
          })
        )
    })
  }
)