import { combineReducers } from 'redux'
import account from './account'
import counter from './counter'
import userHistory from './user_history'

export default combineReducers({
  account,
  counter,
  userHistory
})