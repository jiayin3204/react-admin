import React from 'react';
import Menu from '../../components/menu/menu'
import HeaderBar from '../../components/header/header'
import './home.scss'

export default class Main extends React.Component {
  render () {
    return (
      <div>
        <HeaderBar/>
        <div className="menu"><Menu/></div>
        <div className="home">首页</div>
      </div>
    );
  }
}