import { HANDLE_CHANGE, LOGIN } from '../constants/type'
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
        status: action.payload.status
      }
    default:
      return state
  }
}