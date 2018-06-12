import * as React from 'react'
import { IPortcall } from '../state/IPortcall'
import { Action } from '../Action'
import { IAppState } from '../state/IAppState'
import { ThunkAction } from 'redux-thunk'
import { IPosition } from '../state/IPosition';

export interface IPortcallsProps {
  positions: IPosition[] | false
  loadingMessage: string
}

export class Portcalls extends React.PureComponent<IPortcallsProps> {

  public render() {

    if (this.props.positions === false) {
      return 'Loading...'
    }

    return (
      <div>
        {
          this.props.positions.map(position => (
            <div key={position.portcall}>
              {position.portcall} - {position.x} - {position.y}
            </div>
          ))
        }
      </div>

    )
  }
}