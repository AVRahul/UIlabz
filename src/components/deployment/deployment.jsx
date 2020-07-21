import React, { Component } from "react";
import { Row, Col, Card } from "antd";

class Deployment extends Component {
  render() {
    return (
      <>
        <Row>
          <Col span={10}>
              <h6 className="process-title">Deployment</h6>
              <div className="processText-block">
                <h4 className="subProcess-text">
                  Deep dive into the various product development process with
                  some amazing collection of open source resources.
                </h4>
              </div>
          </Col>
        </Row>
        <div className="resource-list" style={{ paddingTop: 20 }}>
          <Row justify="center">
            <Col className="resource-list-card" flex={3}>
              <Card hoverable style={{ width: 220, height: 200 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="resource-list-card" flex={3}>
              <Card hoverable style={{ width: 220, height: 200 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="resource-list-card" flex={3}>
              <Card hoverable style={{ width: 220, height: 200 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="resource-list-card" flex={2}>
              <Card hoverable style={{ width: 220, height: 200 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="resource-list-card" flex={3}>
              <Card hoverable style={{ width: 220, height: 200 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="resource-list-card" flex={3}>
              <Card hoverable style={{ width: 220, height: 200 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="resource-list-card" flex={3}>
              <Card hoverable style={{ width: 220, height: 200 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="resource-list-card" flex={3}>
              <Card hoverable style={{ width: 220, height: 200 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Deployment;
