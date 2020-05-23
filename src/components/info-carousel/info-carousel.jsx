import React, { Component } from "react";
import { Carousel } from 'antd';

class InfoCarousel extends Component {
  state = {
    dotPosition: 'right',
  };

  render() {
    const { dotPosition } = this.state;
    return (
      <div className="backcolor">
        <Carousel dotPosition={dotPosition} autoplay>
          <div >
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default InfoCarousel;