import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import HomePanel from './HomePanel';
import AboutPanel from './AboutPanel';


class MainTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {key: 0};
  }

  handleSelect(key) {
    this.setState({key});
  }

  render() {
    return (
      <div>
        <Tabs id="controlled-tab-example" activeKey={this.state.key}
        onSelect={ (e)=> this.handleSelect()}>
          <Tab eventKey={0} title="Home"><HomePanel/></Tab>
          <Tab eventKey={1} title="About"><AboutPanel/></Tab>
        </Tabs>
      </div>
    );
  }
}

export default MainTabs;
