import React from 'react';
import './App.css';
import { Layout } from 'antd';
import SiderMenu from './components/sider-menu/sider-menu';
import Overview from './components/overview/overview';
const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <div className="navbar">
            <div className="logo">
              Product
              </div>
          </div>
        </Header>
        <Layout>
          <SiderMenu />
          <Layout>
            <Content
              style={{
                padding: 60,
                margin: 0,
                height: 90,
              }}
            >
              <Overview />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
