export type ThunkAction<State, Action> = (dispatch: (action: Action) => void, getState: () => State) => Promise<any>
import { Action, AnyAction } from 'redux'

declare module "redux" {
  export interface Dispatch<S> {
    <Action>(asyncAction: ThunkAction<S, Action>): void 
  }
}

export type Dispatchable<Action, State> = Action | ThunkAction<State, Action>

