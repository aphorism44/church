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
            <br/><br/>March 25, 9:30 a.m., Palm Sunday
            <br/><br/>March 29, 6:30 p.m., Agape' Meal, Maundy Thursday
            <br/><br/>March 30, 6:30 p.m., Tenebrae, Good Friday
            <br/><br/>April 1, 9:30 a.m., Easter, followed by breakfast
            <br/><br/><em>Please see the About page for details on these services.</em>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default SchedulePanel;
