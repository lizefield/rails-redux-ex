import { createStore } from 'redux'
import reducers from './reducers/index'
import * as CounterAction from './actions/counter'
console.log('---> redux start')

// --------------------------------------------------
//   store
const store = createStore(reducers)
store.subscribe(() => console.log(store.getState()))
store.dispatch(CounterAction.increment(1))
store.dispatch(CounterAction.decrement(1))
