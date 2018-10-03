import React from 'react'
import Account from '../containers/account'
import Counter from '../containers/counter'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Account />
        <Counter />
      </div>
    )
  }
}