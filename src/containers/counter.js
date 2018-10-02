import { connect } from 'react-redux'
import { increment, decrement } from '../actions/counter'
import counter from '../components/counter'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment() { dispatch(increment(1)) },
    decrement() { dispatch(decrement(1)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(counter)
