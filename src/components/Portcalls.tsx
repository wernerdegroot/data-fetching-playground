import * as React from 'react'
import { IPortcall } from '../state/IPortcall'
import { Action } from '../Action'
import { IAppState } from '../state/IAppState'
import { ThunkAction } from 'redux-thunk'

export interface IPortcallsProps {
  portcalls: IPortcall[] | false
  loadingMessage: string
}

export class Portcalls extends React.PureComponent<IPortcallsProps> {

  public render() {

    if (this.props.portcalls === false) {
      return 'Loading...'
    }

    return (
      <div>
        {
          this.props.portcalls.map(portcall => (
            <div key={portcall.id}>
              {portcall.shipName}
            </div>
          ))
        }
      </div>

    )
  }
}