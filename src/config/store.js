import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { RouterState, connectRouter, routerMiddleware } from 'connected-react-router'
import reducers from '../reducers'
import { userHistory } from '../middleware/user_history'

export const history = createBrowserHistory()
export const store = createStore(
    connectRouter(history)(reducers),
    { router: RouterState },
    applyMiddleware(userHistory, thunkMiddleware, routerMiddleware(history))
  )
