import { HANDLE_CHANGE, LOGIN } from '../constants/type'
import { INIT_STATE_ACCOUNT } from '../constants/init'

export default (state=INIT_STATE_ACCOUNT, action) => {
  console.log('---> account reducer')
  console.log(JSON.stringify(action))
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        ...action.input
      }
    case LOGIN:
      return {
        ...state,
        status: action.status
      }
    default:
      return state
  }
}