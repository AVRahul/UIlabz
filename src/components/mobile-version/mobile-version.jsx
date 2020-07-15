import React, { Component } from "react";
import { Row, Col } from "antd";

class MobileVersion extends Component {
  render() {
    return (
      <div className="container">
        <Row className="desktop">
          <Col span={24}>
            <div className="title-section">
              <h1 className="title-text"> Mobile version under construction</h1>
              <div className="subtext-block">
                <h4 className="subtitle-text">
                  Our developers a working hard to build the moile version.
                </h4>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MobileVersion;
