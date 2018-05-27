import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { Filter } from './containers/Filter'
import { Portcalls } from './containers/Portcalls'

ReactDOM.render(
  (
    <Provider store={store}>
      <>
        <Filter/>
        <Portcalls/>
      </>
    </Provider>
  ),
  document.getElementById('example')
)