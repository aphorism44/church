import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer" >
        <br/><br/>
        <br/>Immanuel Lutheran Church
        <br/>137 West Main Street
        <br/>Merrimac, WI  53561
        <br/>(608) 493-2640
        <br/><a href="mailto:immluth@merr.com">Immluth@merr.com</a>
        <br/><br/><a href="https://www.google.com/maps/place/137+Main+St,+Merrimac,+WI+53561/@43.3733374,-89.6268227,17z/data=!3m1!4b1!4m5!3m4!1s0x8807117df261704d:0xcf4758a8eb3bcb37!8m2!3d43.3733335!4d-89.624634">Map</a>
      </footer>
    );
  }
}

export default Footer;
