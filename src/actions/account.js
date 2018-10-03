import { LOGIN, LOGOUT } from '../constants/type'
import Axios from 'axios';

function loginResult(response) {
  console.log('---> action login result')
  console.log(JSON.stringify(response))
  return {
    type: LOGIN,
    status: (response.status === 'success')
  }
}

export function login(user) {
  console.log('---> action login')
  console.log(JSON.stringify(user))
  return dispatch => {
    return Axios.post('http://localhost:3000/api/v1/auth/login', { id: user.id, password: user.password})
            .then(response => dispatch(loginResult(response.data)))
  }
}
