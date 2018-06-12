import { Cache } from "./Cache";
import { IPosition } from "../state/IPosition";
import { IAppState } from "../state/IAppState";

export const areEqual: (left: string[], right: string[]) => boolean = (left, right) => {
  const allLeftsInRight = left.every(leftItem => right.some(rightItem => leftItem === rightItem))
  const allRightsInLeft = right.every(rightItem => left.some(leftItem => leftItem === rightItem))
  return allLeftsInRight && allRightsInLeft
}

export const positionsCache = new Cache<string[], IPosition[], IAppState> (
  'positions',
  areEqual,
  appState => appState.positions
)