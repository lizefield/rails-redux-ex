import { HANDLE_CHANGE, LOGIN, LOGOUT } from '../constants/type'
import { INIT_STATE_ACCOUNT } from '../constants/init'

export default (state=INIT_STATE_ACCOUNT, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        ...action.payload.input
      }
    case LOGIN:
      return {
        ...state,
        ...action.payload
      }
    case LOGOUT:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}