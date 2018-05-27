import { IBerth } from './IBerth'
import { IPortcall } from './IPortcall'
import { IPosition } from './IPosition'
import { IFilter } from './IFilter'

export interface IAppState {
  berths: IBerth[]
  portcalls: IPortcall[]
  positions: IPosition[]
  filter: IFilter
}