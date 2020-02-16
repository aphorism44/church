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
            <strong>Upcoming Events - 2020</strong>
            <ul>
              <li><strong>6:30 p.m., Wednesday, Feb. 26.</strong> Ash Wednesday Service. Preceded by a soup dinner at <strong>5:30 p.m.</strong></li>
            </ul>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default SchedulePanel;
