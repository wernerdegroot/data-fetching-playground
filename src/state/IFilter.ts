export type IFilter = string[]

export const areEqual: (left: IFilter, right: IFilter) => boolean = (left, right) => {
  const allLeftsInRight = left.every(leftItem => right.some(rightItem => leftItem === rightItem))
  const allRightsInLeft = right.every(rightItem => left.some(leftItem => leftItem === rightItem))
  return allLeftsInRight && allRightsInLeft
}