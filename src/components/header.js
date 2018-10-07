import React from 'react'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    console.dir(props)
  }

  render() {
    const { account, handleChange, login, logout } = this.props
    if (account.token) {
      return (
        <div>
          {account.email}
          <button onClick={() => logout(account.token)}>LOGOUT</button>
          {this.setMessage(account.error)}
        </div>
      )
    } else {
      return (
        <div>
          <input name='email' type='text' value={account.email} onChange={(e) => handleChange({ [e.target.name]: e.target.value })}></input>
          <input name='password' type='text' value={account.password} onChange={(e) => handleChange({ [e.target.name]: e.target.value })}></input>
          <button onClick={() => login(account)}>LOGIN</button>
          {this.setMessage(account.error)}
          <br />
          Email:&nbsp;test@test.com&emsp;Password:&nbsp;password
        </div>
      )
    }
  }

  setMessage(error) {
    return (error) ? <div style={{color: 'red'}}>{error}</div> : null
  }
}