import { HANDLE_CHANGE, ADD_USER_HISTORY } from '../constants/type'

export function handleChange(input) {
  return {
    type: HANDLE_CHANGE,
    payload: { input }
  }
}

export function addUserHistory(history) {
  return {
    type: ADD_USER_HISTORY,
    payload: { history }
  }
}