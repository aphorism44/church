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
            <strong>Upcoming Events - 2019</strong>
            <ul>
            <li>Sunday, Feb. 17, <em>Valentine's Day Fellowship and Mini-Bake Sale</em>, takes place after morning worship.</li>
            <li>Sunday, Feb. 24, <em>Annual Church Meeting</em>, takes place after morning worship.</li>
            </ul>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default SchedulePanel;
