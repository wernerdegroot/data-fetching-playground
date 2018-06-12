import { IBerth } from './IBerth'
import { IPortcall } from './IPortcall'
import { IPosition } from './IPosition'
import { IFilter } from './IFilter'
import { CacheItem } from '../util/CacheItem'

export interface IAppState {
  berths: IBerth[]
  portcalls: CacheItem<string[], IPortcall[]>[]
  positions: CacheItem<string[], IPosition[]>[]
  filter: IFilter
}