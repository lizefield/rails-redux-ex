import React from 'react'
import Counter from '../containers/counter'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Counter />
      </div>
    )
  }
}