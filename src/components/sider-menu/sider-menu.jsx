import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Link } from 'react-router-dom';

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
          <Menu.Item key="0"><Link to="/">Overview</Link></Menu.Item>
            <Menu.Item key="1"><Link to="/planning">Planning</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/requirements">Requirements</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/design">Design</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/development">Development</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/testing">Testing</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/deployment">Deployment</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/maintenance">Maintenance</Link></Menu.Item>
            <Menu.Item key="9"><Link to="/learn">Learn</Link></Menu.Item>
          </Menu>
        </div>
      </Sider>
    );
  }
}

export default SiderMenu;
