import { berth1, berth2, berth3, berth4 } from './IBerth'

export interface IPortcall {
  id: string
  shipName: string
  berths: string[]
}

export const portcall1: IPortcall = {id: '1', shipName: 'Mureen', berths: [berth1.id, berth3.id]}
export const portcall2: IPortcall = {id: '2', shipName: 'Zeester', berths: [berth2.id, berth3.id]}
export const portcall3: IPortcall = {id: '3', shipName: 'Zeepaardje', berths: [berth1.id, berth2.id]}
export const portcall4: IPortcall = {id: '4', shipName: 'Pakjesboot', berths: [berth4.id]}

export const defaultPortcalls = [portcall1, portcall2, portcall3, portcall4]
