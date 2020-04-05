import React, { Component } from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

class AboutPanel extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid" fluid="true">
          <Col xs={4} md={4} lg={4}>
            <Image src={require("./resources/stainedGlass.jpeg")} alt="The Good Shepherd stained glass window, installed 1932" responsive/>
          </Col>
          <Col xs={8} md={8} lg={8}>
              <br/><br/>Founded in 1924, Immanuel is Merrimac`s hometown Lutheran church. The present building has been used since 1930,
              when the congregation purchased an old dance hall and renovated it into something <em>much</em> different.
              <br/><br/>Over the decades, Immanuel has faced many trials, mainly due to the small size of the community, and continues to face these today.
               But the church remains open to all people, residents and visitors, who want to praise God.
              <br/><br/>Immanuel is a member of the <a href="http://www.elca.org/">Evangelical Lutheran Church in America</a>.
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default AboutPanel;
