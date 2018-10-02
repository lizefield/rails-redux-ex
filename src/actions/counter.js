export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export function increment(num) {
  return {
    type: INCREMENT,
    num
  }
}

export function decrement(num) {
  return {
    type: INCREMENT,
    num
  }
}