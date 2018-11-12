import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import './index.css';
class SchedulePanel extends Component {

  render() {
    return (
      <div>
      <Grid>
        <Row className="show-grid" fluid="true">
          <Col xs={6} md={6} lg={6}>
              <br/><br/>
              <strong>Sunday Communion Services</strong>
              <br/><br/>9:30 a.m., every Sunday
          </Col>
          <Col xs={6} md={6} lg={6}>
            <br/><br/>
            <strong>Upcoming Special Services - 2018</strong>
            <br/><br/>November 21, 6:30 p.m., American Thanksgiving Service
            <br/><em>Followed by pie and fellowship</em>
            <br/><br/>November 25, Advent Setup and Fellowship
            <br/><em>Held after the 9:30 a.m. Sunday service</em>
            <br/><br/>December 24, 7 p.m., Joyous Christmas Service
            <br/><em>Harp performance starts at 6:30 p.m.</em>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default SchedulePanel;
