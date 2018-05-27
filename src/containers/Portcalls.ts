import { IPortcallsProps, Portcalls as PresentationalComponent } from '../components/Portcalls'
import { connect, Dispatch } from 'react-redux'
import { IAppState } from '../state/IAppState'
import * as Results from '../util/Results'
import { areEqual } from '../state/IFilter'
import { Action, fetchPortcallsAction } from '../Action'
import { IPortcall } from '../state/IPortcall'

export function mapStateToProps(appState: IAppState): Pick<IPortcallsProps, 'portcalls' | 'actions'> {

  const portcalls: IPortcall[] = Results.mostRecent(appState.portcalls, appState.filter, areEqual, [])
  const actions = Results.actions(appState.portcalls, appState.filter, areEqual, fetchPortcallsAction())

  return {
    portcalls,
    actions
  }
}

export function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    dispatchAction: (action: Action) => {
      console.log(action)
      dispatch(action)
    }
  }
}

export const Portcalls = connect(mapStateToProps, mapDispatchToProps)(PresentationalComponent)