import { IPortcallsProps, Portcalls as PresentationalComponent } from '../components/Portcalls'
import { connect } from 'react-redux'
import { IAppState } from '../state/IAppState'

export function mapStateToProps(appState: IAppState): IPortcallsProps {

  const portcallsThatMatchFilter = appState.portcalls.filter(portcall =>
    portcall.berths.some(berth => appState.filter.some(selectedBerth => selectedBerth === berth))
  )

  return {
    portcalls: portcallsThatMatchFilter
  }
}

export const Portcalls = connect(mapStateToProps)(PresentationalComponent)