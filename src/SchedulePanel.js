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
            <li>Sunday, April 14, <em>Palm Sunday Service</em>, 9:30 a.m.</li>
            <li>Thursday, April 18, <em>Maundy Thursday Agape' Meal</em>, 6 p.m.</li>
            <li>Friday, April 19, <em>Good Friday Tenebrae Service</em>, 6 p.m.</li>
            <ul>
              <li><strong>Please see the "About" page for more information on Maundy Thursday and Good Friday services.</strong></li>
            </ul>
            <li>Sunday, April 21, <em>Easter Celebration, with following breakfast</em>, 9:30 a.m.</li>
            </ul>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default SchedulePanel;
