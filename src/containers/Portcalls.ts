import * as React from 'react'
import { IPortcallsProps, Portcalls as PresentationalComponent } from '../components/Portcalls'
import { connect, MapStateToPropsParam, MapDispatchToPropsParam, InferableComponentEnhancerWithProps } from 'react-redux'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IAppState } from '../state/IAppState'
import * as Results from '../util/Results'
import { areEqual } from '../state/IFilter'
import { Action, fetchPortcallsAction } from '../Action'
import { IPortcall } from '../state/IPortcall'
import { connectAsync } from '../util/ResolvedAsync';
import { asyncPortcallsSelector } from '../selectors/asyncPortcallsSelector';

export function mapStateToAsyncProps(appState: IAppState) {
  return {
    portcalls: asyncPortcallsSelector(appState)
  }
}

export function mapStateToNonAsyncProps(appState: IAppState) {
  return {
    loadingMessage: 'Loading...'
  }
}

export function mapDispatchToProps(dispatch: Dispatch<IAppState>) {
  return {}
}

export const Portcalls = connectAsync(mapStateToAsyncProps, mapStateToNonAsyncProps, mapDispatchToProps)(PresentationalComponent)