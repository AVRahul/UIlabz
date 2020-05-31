import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import { Link } from 'react-router-dom';

const style = { background: "#0092ff", padding: "8px 10px" };

class Overview extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col span={24}>
            <div className="title-section">
              <h1 className="title-text"> Product development tools</h1>
              <div className="subtext-block">
                <h4 className="subtitle-text">
                  Deep dive into the various product development process with
                  some amazing collection of open source resources.
                </h4>
              </div>
            </div>
          </Col>
        </Row>
        <Row
          justify="center"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          align="top"
        >
          <Col flex={4}>
          <Link to="/inspiration">
            <Card hoverable style={{ style, height: 150 }}>
              <h6 className="card-title">Inspiration</h6>
              <div className="plan-card">
                <img alt="plan" src="/assets/images/idea.png" />
              </div>
            </Card>
            </Link>
          </Col>
          <Col flex={4}>
          <Link to="/library">
            <Card hoverable style={{ style, height: 150 }}>
              <h6 className="card-title">Library</h6>
              <div className="requirement-card">
                <img alt="requirement" src="/assets/images/require.png" />
              </div>
            </Card>
            </Link>
          </Col>
          <Col flex={6}>
          <Link to="/design">
            <Card hoverable style={{ style, height: 380 }}>
              <h6 className="card-title">Design</h6>
              <div className="design-card">
                <img alt="design" src="/assets/images/design.png" />
              </div>
            </Card>
            </Link>
          </Col>
        </Row>
        <Row justify="center" align="top" className="row2-card">
          <Col flex={7}>
          <Link to="/development">
            <Card hoverable style={{ width: 580, height: 200 }}>
              <h6 className="card-title">Development</h6>
              <div className="develop-card">
                <img alt="design" src="/assets/images/develop.png" />
              </div>
            </Card>
            </Link>
          </Col>
        </Row>
        <Row
          className="row3-card"
          justify="center"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          align="top"
        >
          <Col flex={4}>
          <Link to="/testing">
            <Card hoverable style={{ style, height: 250 }}>
              <h6 className="card-title">Testing</h6>
              <div className="test-card">
                <img alt="design" src="/assets/images/testing.png" />
              </div>
            </Card>
          </Link>
          </Col>
          <Col flex={4}>
          <Link to="/deployment">
            <Card hoverable style={{ style, height: 250 }}>
              <h6 className="card-title">Deployment</h6>
              <div className="deploy-card">
              <img alt="design" src="/assets/images/deploy.png" />
              </div>
            </Card>
            </Link>
          </Col>
        </Row>
        <Row className="row4-card" justify="center" align="top">
          <Col flex={4}>
          <Link to="/maintenance">
            <Card hoverable style={{ width: 300, height: 250 }}>
              <h6 className="card-title">Maintenance</h6>
              <div className="maintain-card">
                <img alt="requirement" src="/assets/images/maintain.png" />
              </div>
            </Card>
            </Link>
          </Col>
          <Col>
          <Link to="/learn">
            <Card hoverable style={{ width: 630, height: 250 }}>
              <h6 className="card-title">Learning</h6>
              <div className="learn-card">
                <img alt="Leaning" src="/assets/images/learn.png" />
              </div>
            </Card>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Overview;
