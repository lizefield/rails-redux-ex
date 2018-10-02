import { INCREMENT, DECREMENT } from '../constants/type'
import { INIT_STATE } from '../constants/init'

export default (state=INIT_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.num
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.num
      }
    default:
      return state
  }
}