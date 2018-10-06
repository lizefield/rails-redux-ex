import { INCREMENT, DECREMENT } from '../constants/type'

export function increment(num) {
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