import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { Route, Switch } from 'react-router'
import { RouterState, connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'
import reducers from './reducers/index'
import Login from './containers/account'

const history = createBrowserHistory()

const store = createStore(
    connectRouter(history)(reducers),
    { router: RouterState },
    applyMiddleware(thunkMiddleware, routerMiddleware(history))
  )

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route render={() => (<div>No Content</div>)} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('redux-app')
)