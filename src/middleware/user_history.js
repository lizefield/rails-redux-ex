import { LOGIN, LOGOUT, INCREMENT, DECREMENT } from '../constants/type'
import { addUserHistory } from '../actions/common'

export const userHistory = store => next => action => {
  next(action)

  // add user history
  switch (action.type) {
    case LOGIN:
      next(addUserHistory({ message: 'Login', created_at: new Date() }))
      break
    case LOGOUT:
      next(addUserHistory({ message: 'Logout', created_at: new Date() }))
      break
    case INCREMENT:
      next(addUserHistory({ message: 'Increment', created_at: new Date() }))
      break
    case DECREMENT:
      next(addUserHistory({ message: 'Decrement', created_at: new Date() }))
      break
    default:
      // nothing
  }
  
}