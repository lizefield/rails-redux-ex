import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers/index'
import Index from './components/index'

const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware)
  )

render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('redux-app')
)