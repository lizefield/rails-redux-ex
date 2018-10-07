import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { history, store } from './config/store'
import Routes from './config/routes'

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {Routes}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('redux-app')
)