import { connect } from 'react-redux'
import NoMatch from '../components/nomatch'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NoMatch)
