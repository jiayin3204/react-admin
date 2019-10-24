import React from 'react';
import './login.scss'

export default class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      login: '登录'
    }
  }

  handleGoLogin (e) {
    this.props.history.push('/')
  }

  render () {
    return (
      <div className="login-content">
        <div className="login-box">
          <h1 className="title">请登录</h1>
          <div className="items">
            <span>账号：</span>
            <input type="text" placeholder="请输入账号"/>
          </div>
          <div className="items">
            <span>密码：</span>
            <input type="text" placeholder="请输入密码"/>
          </div>
          <div className="login-sign" onClick={() => this.handleGoLogin(1)}>{this.state.login}</div>
        </div>
      </div>
    )
  }
}