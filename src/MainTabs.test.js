import React from 'react';
import ReactDOM from 'react-dom';
import MainTabs from './MainTabs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
