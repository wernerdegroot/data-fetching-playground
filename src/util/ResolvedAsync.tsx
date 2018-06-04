import * as React from 'react'
import * as Results from './Results'
import { IAppState } from '../state/IAppState';
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';

export type AsyncStateProps<O, Action> = {
  [K in keyof O]: Results.AsyncResult<O[K], Action>
}

export type ResolvedAsyncStateProps<O> = {
  [K in keyof O]: O[K] | false
}

export type NonAsyncStateProps<O> = {
  [K in keyof O]: O[K]
}

export type DispatchProps<O> = {
  [K in keyof O]: O[K]
}

export type DispatchFunction<IAppState> = {
  dispatch: Dispatch<IAppState>
}

export const connectAsync = <A, B, C, Action>(
  mapStateToAsyncProps: (appState: IAppState) => AsyncStateProps<A, Action>,
  mapStateToNonAsyncProps: (appState: IAppState) => NonAsyncStateProps<B>,
  mapDispatchToProps: (dispatch: Dispatch<IAppState>) => DispatchProps<C>) => (Component: React.ComponentClass<ResolvedAsyncStateProps<A> & B & C>): React.ComponentClass<{}> => {

  type Props = {
    asyncStateProps: AsyncStateProps<A, Action>
    nonAsyncStateProps: NonAsyncStateProps<B>
    dispatchProps: DispatchProps<C>
    dispatchFunction: DispatchFunction<IAppState>
  }

  class ToConnect extends React.Component<Props> {
    public render() {
      const propsToComponent = {
        ...(this.props.nonAsyncStateProps as any),
        ...(this.resolvedAsyncProps() as any),
        ...(this.props.dispatchProps as any)
      }
      return <Component {...propsToComponent} />
    }

    public componentDidMount() {
      this.componentDidUpdate()
    }

    public componentDidUpdate() {
      const asyncStateProps: Record<string, Results.AsyncResult<any, any>> = this.props.asyncStateProps
      Object.keys(asyncStateProps).forEach(key => {
        asyncStateProps[key].actions.forEach(action => {
          this.props.dispatchFunction.dispatch(action)
        })
      })
     
    }

    private resolvedAsyncProps(): ResolvedAsyncStateProps<A> {
      const asyncStateProps: Record<string, Results.AsyncResult<any, any>> = this.props.asyncStateProps
      const result: any = {}
      Object.keys(asyncStateProps).forEach(key => {
        result[key] = asyncStateProps[key].results.length > 0 ? asyncStateProps[key].results[0] : false
      })
      return result
    }
  }

  function mapStateToPropsToConnect(state: IAppState): Pick<Props, 'asyncStateProps' | 'nonAsyncStateProps'> {
    return {
      asyncStateProps: mapStateToAsyncProps(state),
      nonAsyncStateProps: mapStateToNonAsyncProps(state)
    }
  }

  function mapDispatchToPropsToConnect(dispatch: Dispatch<IAppState>): Pick<Props, 'dispatchProps' | 'dispatchFunction'> {
    return {
      dispatchProps: mapDispatchToProps(dispatch),
      dispatchFunction: { dispatch }
    }
  }

  return connect(mapStateToPropsToConnect, mapDispatchToPropsToConnect)(ToConnect)
}
