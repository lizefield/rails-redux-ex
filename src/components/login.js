import React from 'react'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    console.dir(props)
  }

  render() {
    const { account, handleChange, login } = this.props
    return (
      <div>
        <h1>Login</h1>
        <input name='email' type='text' value={account.email} onChange={(e) => handleChange({ [e.target.name]: e.target.value })}></input>
        <input name='password' type='text' value={account.password} onChange={(e) => handleChange({ [e.target.name]: e.target.value })}></input>
        <button onClick={() => login(account)}>LOGIN</button>
        {this.loginStatus(account.status)}
      </div>
    )
  }

  loginStatus(status) {
    return (status) ? <p style={{color: 'red'}}>ログイン成功</p> : <p style={{color: 'blue'}}>ログイン失敗</p>
  }
}