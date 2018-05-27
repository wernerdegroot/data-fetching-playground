import * as React from 'react'
import { IPortcall } from '../state/IPortcall'
import { Action } from '../Action'
import { IAppState } from '../state/IAppState'
import { Dispatchable } from '../util/ThunkAction'

export interface IPortcallsProps {
  portcalls: IPortcall[]

  actions: Dispatchable<Action, IAppState>[]
  dispatchAction: (d: Dispatchable<Action, IAppState>) => void
}

export class Portcalls extends React.PureComponent<IPortcallsProps> {

  public componentWillReceiveProps(props: IPortcallsProps) {
    props.actions.forEach(props.dispatchAction)
  }

  public render() {
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