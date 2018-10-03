import { HANDLE_CHANGE } from '../constants/type'

export function handleChange(input) {
  console.log('---> action handle change')
  console.log(JSON.stringify(input))
  return {
    type: HANDLE_CHANGE,
    input
  }
}
