import { LOGIN, LOGOUT } from '../constants/type'
import Axios from 'axios';

function loginResult(response) {
  console.log('---> action login result')
  console.log(JSON.stringify(response))
  return {
    type: LOGIN,
    payload: {
      token: (response.status === 'success') ? response.token : null,
      status: (response.status === 'success')
    }
  }
}

export function login(user) {
  return dispatch => {
    return Axios.post('http://localhost:3000/api/v1/auth/login', { email: user.email, password: user.password})
            .then(response => dispatch(loginResult(response.data)))
  }
}
