import { Action as DataAction, awaitingResultAction, resultReceivedAction } from './util/Action'
import { ThunkAction } from './util/ThunkAction'
import { IAppState } from './state/IAppState'
import { defaultPortcalls, IPortcall } from './state/IPortcall'

export type Action = IToggleBerthAction | DataAction<any, any>

export const TOGGLE_BERTH_ACTION = 'TOGGLE_BERTH_ACTION'

export interface IToggleBerthAction {
  type: typeof TOGGLE_BERTH_ACTION
  berth: string
}

export function toggleBerthAction(berth: string): IToggleBerthAction {
  return {
    type: TOGGLE_BERTH_ACTION,
    berth
  }
}

let nextId = 0
export function fetchPortcallsAction(): ThunkAction<IAppState, Action> {
  return (dispatch, getState) => {
    const state = getState()
    const requestId = nextId + ''
    nextId++
    dispatch(awaitingResultAction<string[]>('portcalls', requestId, state.filter, new Date()))
    setTimeout(() => {
      const portcallsThatMatchFilter = defaultPortcalls.filter(portcall =>
        portcall.berths.some(berth => state.filter.some(selectedBerth => selectedBerth === berth))
      )
      dispatch(resultReceivedAction<string[], IPortcall[]>('portcalls', requestId, state.filter, po))
    }, 5000)
    return Promise.resolve(4)
  }
}