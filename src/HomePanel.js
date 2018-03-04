import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';

import SchedulePanel from './SchedulePanel'

class HomePanel extends Component {
  render() {
    return (
      <div className="HomePanel">
        <Carousel>
        <Carousel.Item>
          <Image alt="outside church" src={require("./resources/church0.jpeg")} responsive/>
          <Carousel.Caption>
            <h3>All Are Welcome</h3>
          </Carousel.Caption>
        </Carousel.Item>
          <Carousel.Item>
            <Image alt="inside church" src={require("./resources/church1.jpeg")} responsive/>
            <Carousel.Caption>
              <h3>Sanctuary</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image alt="lemonade club" src={require("./resources/church2.jpeg")} responsive/>
            <Carousel.Caption>
              <h3>Fellowship</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image alt="BBQ" src={require("./resources/church3.jpeg")} responsive/>
            <Carousel.Caption>
              <h3>Community Service</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image alt="Sunday school" src={require("./resources/church4.jpeg")} responsive/>
            <Carousel.Caption>
              <h3>Join Us</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <SchedulePanel/>
      </div>
    );
  }
}


export default HomePanel;
