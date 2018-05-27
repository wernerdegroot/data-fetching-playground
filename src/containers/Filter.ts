import { IAppState } from '../state/IAppState'
import { connect, Dispatch } from 'react-redux'
import { Action, toggleBerthAction } from '../Action'
import { Filter as PresentationalComponent } from '../components/Filter'

export function mapStateToProps(state: IAppState) {
  return {
    berths: state.berths,
    selectedBerths: state.filter
  }
}

export function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    onToggleBerth: (berth: string) => {
      dispatch(toggleBerthAction(berth))
    }
  }
}

export const Filter = connect(mapStateToProps, mapDispatchToProps)(PresentationalComponent)