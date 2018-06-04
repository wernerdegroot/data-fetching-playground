import { IAppState } from "../state/IAppState";
import { ThunkAction } from "redux-thunk";
import { fetchPortcallsAction } from "../Action";
import * as Results from '../util/Results'
import { IPortcall } from "../state/IPortcall";
import { areEqual } from "../state/IFilter";

export function asyncPortcallsSelector(appState: IAppState) {
  // The action to fire when the data is not available. This action (thunk)
  // will start a request:
  const action: ThunkAction<void, IAppState, void> = fetchPortcallsAction()

  // The portcalls that are available (might not be there yet, because a request might be running)
  const portcalls: Results.AsyncResult<IPortcall[], typeof action> = Results.asyncResult(appState.portcalls, appState.filter, areEqual, action)

  return portcalls
}