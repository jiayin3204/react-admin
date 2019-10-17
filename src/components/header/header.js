import React from 'react';
import './header.scss';

export default class Home extends React.Component {
  render () {
    let logo = `//img.alicdn.com/shop-logo/82/29/TB1GXJidebviK0jSZFNSuuApXXa.jpg`
    return (
      <div className="header-content">
        <img src={logo} alt="" className="logo"/>
        <div className="avator">
          <img src="./img/avator.jpeg" alt=""/>
          <span>佳音</span>
        </div>
      </div>
    );
  }
}