import { INCREMENT, DECREMENT } from '../actions/counter'
const INITIAL_STATE = { count: 0 }

export default (state=INITIAL_STATE, action) => {
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