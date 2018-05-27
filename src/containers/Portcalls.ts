import { IPortcallsProps, Portcalls as PresentationalComponent } from '../components/Portcalls'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { IAppState } from '../state/IAppState'
import * as Results from '../util/Results'
import { areEqual } from '../state/IFilter'
import { Action, fetchPortcallsAction } from '../Action'
import { IPortcall } from '../state/IPortcall'
import { Dispatchable, ThunkAction } from '../util/ThunkAction'

export function mapStateToProps(appState: IAppState): Pick<IPortcallsProps, 'portcalls' | 'actions'> {

  const portcalls: IPortcall[] = Results.mostRecent(appState.portcalls, appState.filter, areEqual, [])
  const action: ThunkAction<IAppState, Action> = fetchPortcallsAction()
  const actions = Results.actions<string[], Dispatchable<Action, IAppState>>(appState.portcalls, appState.filter, areEqual, action)

  return {
    portcalls,
    actions
  }
}

export function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    dispatchAction: (d: Dispatchable<Action, IAppState>) => {
      dispatch(d)
    }
  }
}

export const Portcalls = connect(mapStateToProps, mapDispatchToProps)(PresentationalComponent)