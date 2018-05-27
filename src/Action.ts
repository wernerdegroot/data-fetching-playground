export type Action = IToggleBerthAction

export const TOGGLE_BERTH_ACTION = 'TOGGLE_BERTH_ACTION'
export interface IToggleBerthAction {
  type: typeof TOGGLE_BERTH_ACTION
  berth: string
}
export function toggleBerthAction(berth: string): IToggleBerthAction {
  return {
    type: TOGGLE_BERTH_ACTION,
    berth
  }
}