import { connect } from 'react-redux'
import { handleChange } from '../actions/common'
import { login } from '../actions/account'
import Login from '../components/login'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(input) { dispatch(handleChange(input)) },
    login(user) {dispatch(login(user))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
