import { Menu, Icon } from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import './menu.scss'

const { SubMenu } = Menu;

class Sider extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    return (
      <div>
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: 256 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>学生列表</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Link to="/allStudent">全校学生</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/classStudent">班级学生</Link>
            </Menu.Item>
            <Menu.Item key="3">一对一学生</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>用户列表</span>
              </span>
            }
          >
            <Menu.Item key="5">用户列表</Menu.Item>
            <Menu.Item key="6">用户权限</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>数据统计</span>
              </span>
            }
          >
            <Menu.Item key="9">统计来源</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Sider;