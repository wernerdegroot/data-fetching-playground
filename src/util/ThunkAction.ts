export type ThunkAction<State, Action> = (dispatch: (action: Action) => void, getState: () => State) => Promise<any>
import { Action, AnyAction } from 'redux'

declare module "redux" {
  export interface Dispatch<A extends Action = AnyAction> {
    <State>(asyncAction: ThunkAction<State, A>): any
  }
}

export type Dispatchable<Action, State> = Action | ThunkAction<State, Action>

