import React from 'react'

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    console.dir(props)
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
      </div>
    )
  }
}