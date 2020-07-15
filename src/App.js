import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Layout } from 'antd';
import SiderMenu from './components/sider-menu/sider-menu';
import Overview from './components/overview/overview';
import Inspiration from './components/inspiration/inspiration';
import Library from './components/library/library'
import Design from './components/design/design';
import Development from './components/development/development';
import Testing from './components/testing/testing';
import Deployment from './components/deployment/deployment';
import Maintenance from './components/maintenance/maintenance';
import Learn from './components/learn/learn';

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Header className="header">
            <div className="navbar">
              <div className="logo">
                Product
            </div>
              <Switch>
                {/* <Route exact path="/" component={About} />
            <Route path="/project" component={Project} />
            <Route path="/blog" component={Blog} />
            <Route component={NoMatch} /> */}
              </Switch>
            </div>
          </Header>
          <Layout >
            <SiderMenu />
            <Layout>
              <Content
                style={{
                  padding: 60,
                  margin: 0,
                  height: 90,
                }}
              >
                <Switch>
                  <Route exact path="/" component={Overview} />
                  <Route path="/Inspiration" component={Inspiration} />
                  <Route path="/Library" component={Library} />
                  <Route path="/Design" component={Design} />
                  <Route path="/Development" component={Development} />
                  <Route path="/Testing" component={Testing} />
                  <Route path="/Deployment" component={Deployment} />
                  <Route path="/Maintenance" component={Maintenance} />
                  <Route path="/Learn" component={Learn} />
                  {/* <Route component={NoMatch} /> */}
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
