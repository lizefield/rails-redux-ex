import { HANDLE_CHANGE } from '../constants/type'

export function handleChange(input) {
  return {
    type: HANDLE_CHANGE,
    payload: { input }
  }
}
