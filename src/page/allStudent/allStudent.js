import React from 'react';
import Menu from '../../components/menu/menu'
import HeaderBar from '../../components/header/header'
import './allStudent.scss'
import { Table } from 'antd';

export default class allStuent extends React.Component {
  constructor (props) {
    super(props)
    const columns = [
      {
        title: '姓名',
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
        title: '咨询时间',
        dataIndex: 'time',
        filterMultiple: false,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: '操作',
        dataIndex: '',
        filterMultiple: false,
        render: (text, record) => (
          <div style={{ color: 'red' }} onClick={() => this.delete(text)}>
            删除
          </div>
        ),
      },
    ];
    
    const data = [
      {
        key: '1',
        name: '李光洁',
        age: 32,
        address: '北京',
        time: '2019-10-14'
      },
      {
        key: '2',
        name: '石小猛',
        age: 22,
        address: '上海',
        time: '2019-10-14'
      },
      {
        key: '3',
        name: '李子璇',
        age: 22,
        address: '内蒙',
        time: '2019-10-14'
      },
      {
        key: '4',
        name: '阳光',
        age: 24,
        address: '深圳',
        time: '2019-10-14'
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

  delete (text) {
    this.state.data.splice(text.key-1,1)
    this.setState({
      data: this.state.data
    })
  }

  
  render () {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
    };
    return (
      <div className="all-student" id="allStudent">
        <HeaderBar/>
        <div className="menu"><Menu/></div>
        <div className="tableColumns">
          <div className="title">学生公海 > </div>
          <Table width="1000" bordered={true} columns={this.state.columns} dataSource={this.state.data}  rowSelection={rowSelection}/>
        </div>
      </div>
    );
  }
}