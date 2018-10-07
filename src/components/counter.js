import React from 'react'
import { Link } from 'react-router-dom'

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    console.dir(props)
  }

  componentWillMount() {
    if (!this.props.account.token) {
      this.props.history.push('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.account.token) {
      nextProps.history.push('/')
    }
  }

  render() {
    const { counter, increment, decrement } = this.props
    return (
      <div>
        <h1>Counter</h1>
        <hr />
        <h2>{counter.count}</h2>
        {this.checkCount(counter.count)}
        <button onClick={(e) => increment(e)}>INCREMENT</button>
        <button onClick={(e) => decrement(e)}>DECREMENT</button>
        <br /><br />
        <Link to="/history">User History</Link>
      </div>
    )
  }

  checkCount(count) {
    return (count >= 10) ? <p style={{color: 'red'}}>Over 10</p> : <p style={{color: 'blue'}}>Under 10</p>
  }
}