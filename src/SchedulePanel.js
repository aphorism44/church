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
              <strong>Sunday services, usually held at 9:30 a.m. on Sundays, have been suspended due to the COVID-19 pandemic.</strong>
              <br/><br/>
          </Col>
          <Col xs={6} md={6} lg={6}>
            <br/><br/>
            <strong>Upcoming Events - 2020</strong>
            <ul>
              <li><strong>We must stay closed during Holy Week, but will let the community know when we reopen.</strong></li>
              <li>More resources are available here: <a href="https://www.elca.org/publichealth">#ELCAChurchTogether</a></li>
              <li>Please call if you wish to receive our e-mail newsletter for the duration of the outbreak.</li>
            </ul>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default SchedulePanel;
