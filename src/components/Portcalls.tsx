import * as React from 'react'
import { IPortcall } from '../state/IPortcall'

export interface IPortcallsProps {
  portcalls: IPortcall[]
}

export const Portcalls = (props: IPortcallsProps) => (
  <div>
    {
      props.portcalls.map(portcall => (
        <div key={portcall.id}>
          {portcall.shipName}
        </div>
      ))
    }
  </div>
)