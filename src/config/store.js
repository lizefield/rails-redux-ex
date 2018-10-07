import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { RouterState, connectRouter, routerMiddleware } from 'connected-react-router'
import reducers from '../reducers/index'

export const history = createBrowserHistory()
export const store = createStore(
    connectRouter(history)(reducers),
    { router: RouterState },
    applyMiddleware(thunkMiddleware, routerMiddleware(history))
  )
