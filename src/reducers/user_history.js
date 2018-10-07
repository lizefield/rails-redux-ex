import { ADD_USER_HISTORY } from '../constants/type'
import { INIT_STATE_USER_HISTORY } from '../constants/init'

export default (state=INIT_STATE_USER_HISTORY, action) => {
  switch (action.type) {
    case ADD_USER_HISTORY:
      return {
        histories: state.histories.concat([{ ...action.payload.history }])
      }
    default:
      return state
  }
}