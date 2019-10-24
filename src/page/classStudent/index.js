import React from 'react';
import Menu from '../../components/menu/menu'
import HeaderBar from '../../components/header/header'
import './index.scss'
import { Table } from 'antd';

export default class allStuent extends React.Component {
  constructor (props) {
    super(props)
    const columns = [
      {
        title: '名字',
        dataIndex: 'name',
        sortDirections: ['descend'],
      },
      {
        title: '年龄',
        dataIndex: 'age',
        defaultSortOrder: 'descend',
      },
      {
        title: '地址',
        dataIndex: 'address',
        filterMultiple: false,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: '是否报名',
        dataIndex: 'sign',
        filterMultiple: false,
        sortDirections: ['descend', 'ascend'],
      },
    ];
    
    const data = [
      {
        key: '1',
        name: '李佳音',
        age: 32,
        address: '北京',
        sign: '是'
      },
      {
        key: '2',
        name: '李潇音',
        age: 22,
        address: '北京',
        sign: '是'
      },
      {
        key: '3',
        name: '徐晓杰',
        age: 22,
        address: '内蒙古',
        sign: '是'
      },
      {
        key: '4',
        name: '温佳伟',
        age: 24,
        address: '北京',
        sign: '是'
      },
    ];
    this.state = {
      columns,
      data
    }
  }


  onChange (filters, sorter, extra) {
    console.log('params', filters, sorter, extra);
  }

  render () {
    return (
      <div className="class-student">
        <HeaderBar/>
        <div className="menu"><Menu/></div>
        <div className="tableColumns">
          <div className="title">班级学生 > </div>
          <Table width="1000" bordered={true} columns={this.state.columns} dataSource={this.state.data} />
        </div>
      </div>
    );
  }
}