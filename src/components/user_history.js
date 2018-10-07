import React from 'react'
import { Link } from 'react-router-dom'

export default class UserHistory extends React.Component {
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
    const { userHistory } = this.props
    return (
      <div>
        <h1>User History</h1>
        <hr />
        <Link to="/counter">Back</Link>
        <br /><br />
        {
          userHistory.histories.map((m, i) => <div key={i}>{`${m.created_at} :: ${m.message}`}</div>)
        }
      </div>
    )
  }
}