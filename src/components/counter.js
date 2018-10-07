import React from 'react'

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
        <h2>{counter.count}</h2>
        {this.checkCount(counter.count)}
        <button onClick={(e) => increment(e)}>INCREMENT</button>
        <button onClick={(e) => decrement(e)}>DECREMENT</button>
      </div>
    )
  }

  checkCount(count) {
    return (count >= 10) ? <p style={{color: 'red'}}>Over 10</p> : <p style={{color: 'blue'}}>Under 10</p>
  }
}