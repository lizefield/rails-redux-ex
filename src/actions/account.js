import { LOGIN, LOGOUT } from '../constants/type'

export function login(user) {
  console.log('---> action login')
  console.log(JSON.stringify(user))
  return {
    type: LOGIN,
    status: true
  }
}
