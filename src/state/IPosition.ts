import { portcall1, portcall2, portcall3, portcall4 } from "./IPortcall";

export interface IPosition {
  portcall: string
  x: number
  y: number
}

export const defaultPositions: IPosition[] = [
  {
    portcall: portcall1.id,
    x: 0,
    y: 0
  },
  {
    portcall: portcall2.id,
    x: 1,
    y: 0
  },
  {
    portcall: portcall3.id,
    x: 0,
    y: 1
  },
  {
    portcall: portcall4.id,
    x: 1,
    y: 1
  }
]