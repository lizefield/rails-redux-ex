import { LOGIN, LOGOUT } from '../constants/type'
import Axios from 'axios';

function loginResult(response) {
  console.log(JSON.stringify(response))
  return {
    type: LOGIN,
    payload: {
      token: (response.status === 'success') ? response.token : null,
      error: (response.status === 'success') ? null : response.message
    }
  }
}

function logoutResult(response) {
  console.log(JSON.stringify(response))
  return {
    type: LOGOUT,
    payload: {
      email: '',
      password: '',
      token: null,
      error: null
    }
  }
}

export function login(user) {
  return dispatch => {
    return Axios.post('http://localhost:3000/api/v1/auth/login', { email: user.email, password: user.password})
            .then(response => dispatch(loginResult(response.data)))
  }
}

export function logout(token) {
  const headers = { Authorization: `Bearer ${token}` }
  console.log(headers)
  return dispatch => {
    return Axios.get('http://localhost:3000/api/v1/auth/logout', { headers: headers })
            .then(response => dispatch(logoutResult(response)))
  }
}