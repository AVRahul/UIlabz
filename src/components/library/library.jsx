import React, { Component } from "react";
import { Row, Col, Card } from "antd";

class Library extends Component {
  render() {
    return (
      <>
        <Row justify="center">
          <Col flex={24}>
            <Card className="plan-hero">
              <h6 className="card-title">Library</h6>
              <div className="develop-card">
                <img alt="design" src="/assets/images/develop.png" />
              </div>
            </Card>
          </Col>
        </Row>
        <div className="resource-list" style={{ paddingTop: 60 }}>
          <Row justify="center">
            <Col className="resource-list-card" flex={3}>
              <Card
              hoverable
                style={{ width: 220, height: 200 }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="resource-list-card" flex={3}>
              <Card
              hoverable
                style={{ width: 220, height: 200 }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="resource-list-card" flex={3}>
              <Card
              hoverable
                style={{ width: 220, height: 200 }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="resource-list-card" flex={2}>
              <Card
              hoverable
                style={{ width: 220, height: 200 }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="resource-list-card" flex={3}>
              <Card
              hoverable
                style={{ width: 220, height: 200 }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="resource-list-card" flex={3}>
              <Card
              hoverable
                style={{ width: 220, height: 200 }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="resource-list-card" flex={3}>
              <Card
              hoverable
                style={{ width: 220, height: 200 }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col className="resource-list-card" flex={3}>
              <Card
              hoverable
                style={{ width: 220, height: 200 }}
              >
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

export default Library;
