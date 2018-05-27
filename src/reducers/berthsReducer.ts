import { defaultBerths, IBerth } from '../state/IBerth'
import { Action } from '../Action'

export function berthsReducer(berths: IBerth[] = defaultBerths, action: Action): IBerth[] {
  return berths
}