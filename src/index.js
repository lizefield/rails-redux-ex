import { createStore } from 'redux'
import reducers from './reducers/index'
import * as CounterAction from './actions/counter'
console.log('---> redux start')

// --------------------------------------------------
//   store
const store = createStore(reducers)
const unsubscribe = store.subscribe(() => console.log(store.getState().counter))
store.dispatch(CounterAction.increment(1))
store.dispatch(CounterAction.decrement(1))

unsubscribe()