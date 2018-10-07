import { INCREMENT, DECREMENT } from '../constants/type'
import { addUserHistory } from './common'

export function increment(num) {
  addUserHistory({ message: '加算', created_at: new Date() })
  return {
    type: INCREMENT,
    payload: { num }
  }
}

export function decrement(num) {
  return {
    type: DECREMENT,
    payload: { num }
  }
}