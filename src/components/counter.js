import React from 'react'

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    console.dir(props)
  }

  render() {
    const { counter, increment, decrement } = this.props
    return (
      <div>
        <h1>Counter</h1>
        <h2>{counter.count}</h2>
        <button onClick={(e) => increment(e)}>INCREMENT</button>
        <button onClick={(e) => decrement(e)}>DECREMENT</button>
      </div>
    )
  }
}