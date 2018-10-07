import { connect } from 'react-redux'
import UserHistory from '../components/user_history'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHistory)
