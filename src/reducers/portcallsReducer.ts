import { defaultPortcalls, IPortcall } from '../state/IPortcall'
import { Action } from '../Action'

export function portcallsReducer(portcalls: IPortcall[] = defaultPortcalls, action: Action): IPortcall[] {
  return portcalls
}