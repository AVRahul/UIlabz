import React, { Component } from "react";
import { Row, Col } from "antd";
import { Card } from "antd";

class Overview extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col span={24}>
            <div className="title-section">
              <h1 className="title-text"> Product development process</h1>
              <div className="subtext-block">
                <p className="subtitle-text">
                  Deep dive into the various product development process with
                  some amazing curated collection of open source resources.
                </p>
              </div>
            </div>
            <div className="mt-5  card-element">
              <div className="site-card-border-less-wrapper">
                <Card
                  title="Card title"
                  bordered={false}
                  style={{ width: 300 }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </div>
              <div className="">
                <Card
                  title="Card title"
                  bordered={false}
                  style={{ width: 300 }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </div>
              <div className="site-card-border-less-wrapper card-title">
                <Card
                  title="Card title"
                  className="card-title"
                  bordered={false}
                  style={{ width: 300, height: 400 }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className=" card-element layer-two">
              <div className="site-card-border-less-wrapper">
                <Card
                  title="Card title"
                  className="card-title"
                  bordered={false}
                  style={{ width: 630, height: 200 }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </div>
              {/* <div className="site-card-border-less-wrapper">
              <Card title="Card title" bordered={false} style={{ width: 200 }}>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div> */}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Overview;
