import { connect } from 'react-redux'
import { handleChange } from '../actions/common'
import { login, logout } from '../actions/account'
import Header from '../components/header'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(input) { dispatch(handleChange(input)) },
    login(user) {dispatch(login(user))},
    logout(token) {dispatch(logout(token))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
