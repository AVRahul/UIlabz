import React, { Component } from "react";
import { Row, Col } from "antd";

class Planning extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col span={24}>
            <div className="title-section">
              <h1 className="title-text"> Planning</h1>
              <div className="subtext-block">
                <h4 className="subtitle-text">
                  Deep dive into the various product development process with
                  some amazing collection of open source resources.
                </h4>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Planning;
