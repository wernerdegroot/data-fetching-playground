import * as React from 'react'
import { IPortcall } from '../state/IPortcall'
import { Action } from '../Action'

export interface IPortcallsProps {
  portcalls: IPortcall[]

  actions: Action[]
  dispatchAction: (action: Action) => void
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