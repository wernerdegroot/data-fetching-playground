import { portcallsCache } from "../caches/portcallsCache";
import { IAppState } from "../state/IAppState";
import { defaultPortcalls } from "../state/IPortcall";
import { createSelector } from 'reselect'

const filtersSelector = (appState: IAppState) => appState.filter

export const asyncPortcallsSelector = createSelector(
  filtersSelector,
  portcallsCache.selector,
  (filter, portcallsCache) => {
    return portcallsCache
      .getFor(filter)
      .orElse(() =>
        new Promise(resolve => {
          setTimeout(() => {
            const portcallsThatMatchFilter = defaultPortcalls.filter(portcall =>
              portcall.berths.some(berth => filter.some(selectedBerth => selectedBerth === berth))
            )
            resolve(portcallsThatMatchFilter)
          }, 5000)
        })
      )
  }
)
