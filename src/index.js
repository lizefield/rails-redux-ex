import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { render } from 'react-dom'
import reducers from './reducers/index'
import Index from './components/index'

const store = createStore(reducers)

render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('redux-app')
)