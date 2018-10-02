import { createStore } from 'redux'
import CounterReducer from './reducers/counter'
import * as CounterAction from './actions/counter'
console.log('---> redux start')

// --------------------------------------------------
//   store
const store = createStore(CounterReducer)
store.subscribe(() => console.log(store.getState()))
store.dispatch(CounterAction.increment(1))
store.dispatch(CounterAction.decrement(1))
