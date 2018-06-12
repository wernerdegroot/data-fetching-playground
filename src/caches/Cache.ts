import { ThunkAction } from "redux-thunk";
import { CacheItem } from "../util/CacheItem";
import { Dispatch } from "redux";
import { awaitingResultAction, resultReceivedAction } from "../util/Action";
import { AsyncResult, asyncResult } from "../util/Results";

export class GetForResult<Key, Result, State> {

  constructor(
    private readonly cacheId: string,
    private readonly requestId: string,
    private readonly key: Key,
    private readonly keysAreEqual: (left: Key, right: Key) => boolean,
    private readonly cache: CacheItem<Key, Result>[]
  ) {

  }

  orElse(stateToPromise: (state: State) => Promise<Result>) {
    const action: ThunkAction<void, State, void> = this.fetchAction(stateToPromise)
    const result: AsyncResult<Result, typeof action> = asyncResult(this.cache, this.key, this.keysAreEqual, action)
    return result
  }

  fetchAction = (stateToPromise: (state: State) => Promise<Result>): ThunkAction<Promise<Result>, State, void> => {
    return (dispatch: Dispatch<State>, getState: () => State) => {
      const state = getState()
      const resultPromise = stateToPromise(state)
      dispatch(awaitingResultAction<Key>(this.cacheId, this.requestId, this.key, new Date()))
      return resultPromise.then(result => {
        dispatch(resultReceivedAction<Key, Result>(this.cacheId, this.requestId, this.key, result, new Date()))
        return result
      })
    }
  }
}

export class SelectorResult<Key, Result, State> {

  constructor(
    private readonly requestId: string,
    private readonly cacheId: string,
    private readonly keysAreEqual: (left: Key, right: Key) => boolean,
    private readonly cache: CacheItem<Key, Result>[]
  ) {

  }

  getFor(key: Key): GetForResult<Key, Result, State> {
    return new GetForResult(this.cacheId, this.requestId, key, this.keysAreEqual, this.cache)
  }
}


export class Cache<Key, Result, State> {

  private requestId = 0

  constructor(
    private readonly cacheId: string,
    private readonly keysAreEqual: (left: Key, right: Key) => boolean,
    private readonly cacheSelector: (state: State) => CacheItem<Key, Result>[]
  ) {

  }

  selector = (state: State): SelectorResult<Key, Result, State> => {
    const requestId = this.requestId + ''
    this.requestId++
    return new SelectorResult(requestId, this.cacheId, this.keysAreEqual, this.cacheSelector(state))
  }
}