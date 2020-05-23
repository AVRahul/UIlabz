import React, { Component } from "react";
import { Row, Col, Card } from "antd";

const style = { background: "#0092ff", padding: "8px 10px" };

class Overview extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col span={24}>
            <div className="title-section">
              <h1 className="title-text"> Product development process</h1>
              <div className="subtext-block">
                <h4 className="subtitle-text">
                  Deep dive into the various product development process with
                  some amazing curated collection of open source resources.
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
            <Card hoverable style={{ style, height: 150 }}>
              <h6 className="card-title">Planning</h6>
              <div className="plan-card">
                <img alt="plan" src="/assets/images/idea.png" />
              </div>
            </Card>
          </Col>
          <Col flex={4}>
            <Card hoverable style={{ style, height: 150 }}>
              <h6 className="card-title">Requirements</h6>
              <div className="requirement-card">
                <img alt="requirement" src="/assets/images/require.png" />
              </div>
            </Card>
          </Col>
          <Col flex={6}>
            <Card hoverable style={{ style, height: 380 }}>
              <h6 className="card-title">Design</h6>
              <div className="design-card">
                <img alt="design" src="/assets/images/design.png" />
              </div>
            </Card>
          </Col>
        </Row>
        <Row justify="center" align="top" className="row2-card">
          <Col flex={7}>
            <Card hoverable style={{ width: 600, height: 200 }}>
              <h6 className="card-title">Development</h6>
              <div className="develop-card">
                <img alt="design" src="/assets/images/develop.png" />
              </div>
            </Card>
          </Col>
        </Row>
        <Row
          className="row3-card"
          justify="center"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          align="top"
        >
          <Col flex={4}>
            <Card hoverable style={{ style, height: 250 }}>
              <h6 className="card-title">Testing</h6>
              <div className="test-card">
                <img alt="design" src="/assets/images/testing.png" />
              </div>
            </Card>
          </Col>
          <Col flex={4}>
            <Card hoverable style={{ style, height: 250 }}>
              <h6 className="card-title">Deployment</h6>
              <div className="deploy-card">
              <img alt="design" src="/assets/images/deploy.png" />
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="row4-card" justify="center" align="top">
          <Col flex={4}>
            <Card hoverable style={{ width: 300, height: 250 }}>
              <h6 className="card-title">Maintenance</h6>
              <div className="maintain-card">
                <img alt="requirement" src="/assets/images/maintain.png" />
              </div>
            </Card>
          </Col>
          <Col>
            <Card hoverable style={{ width: 630, height: 250 }}>
              <h6 className="card-title">Learning</h6>
              <div className="learn-card">
                <img alt="Leaning" src="/assets/images/learn.png" />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Overview;
