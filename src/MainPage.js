import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

import MainTabs from './MainTabs'
import Footer from './Footer'

class MainPage extends Component {
  render() {
    return (
      <div>
        <PageHeader>Welcome to Immanuel Lutheran Church!</PageHeader>
        <div className="MainPage">
          <MainTabs/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default MainPage;
