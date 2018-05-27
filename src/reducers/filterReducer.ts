import { IFilter } from '../state/IFilter'
import { Action, TOGGLE_BERTH_ACTION } from '../Action'

export function filterReducer(filter: IFilter = [], action: Action): IFilter {
  if (action.type === TOGGLE_BERTH_ACTION) {
    const hasBerth = filter.some(selectedBerth => action.berth === selectedBerth)
    if (hasBerth) {
      return filter.filter(selectedBerth => selectedBerth !== action.berth)
    } else {
      return [...filter, action.berth]
    }
  } else {
    return filter
  }
}