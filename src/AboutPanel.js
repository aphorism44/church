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
              <br/><br/><h2>Special Upcoming Services</h2>
              <dl>
              <dt>Agape' Meal - Maundy Thursday, 6:30 p.m., March 29, 2018</dt>
              <dd>The <em>Agape'</em> (from the Greek New Testament word for "love") was a very early form of worship, combining
              a communal meal with the celebration of the Eucharist. A simple meal of bread, cheese, fruit, and wine will be shared
              by us, together with prayers, readings, conversation...and the gift of the Eucharist at the end. Participants will be asked to
              bring bread, cheese, or fruit to share, and <strong>your reservation is requested! <a href="mailto:jerwinrup@gmail.com?subject=Agape">Please click here to send an email</a>.</strong></dd>
              <br/><dt>Tenebrae - Good Friday, 6:30 p.m., March 30, 2018</dt>
              <dd>The <em>Service of Tenebrae</em> (which means "shadows") receives its name from the progressive extinguishing of
              candles as the Passion Story is read from the Gospel according to St. John.
              </dd>
              </dl>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default AboutPanel;
