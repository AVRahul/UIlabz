import React, { Component } from "react";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

class SiderMenu extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Sider
        breakpoint="xs"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
        }}
        onCollapse={(collapsed, type) => {  
        }}
        width={220}
      >
        <div className="sidebar">
          <Menu mode="inline" defaultSelectedKeys={["0"]}>
            <Menu.Item key="0">Overview</Menu.Item>
            <Menu.Item key="1">Planning</Menu.Item>
            <Menu.Item key="2">Requirements</Menu.Item>
            <Menu.Item key="3">Prototype</Menu.Item>
            <Menu.Item key="4">Implementation</Menu.Item>
            <Menu.Item key="5">Testing</Menu.Item>
            <Menu.Item key="6">Deployment</Menu.Item>
            <Menu.Item key="7">Maintenance</Menu.Item>
            <Menu.Item key="8">Extras</Menu.Item>
            <Menu.Item key="9">Learn</Menu.Item>
          </Menu>
        </div>
      </Sider>
    );
  }
}

export default SiderMenu;
