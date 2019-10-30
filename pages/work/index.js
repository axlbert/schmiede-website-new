import React from 'react';

import './work.css';
import Nav from '../../components/nav';

export default function Work() {
  return (
    <div>
      <Nav />
      <div className="container">
        <header>
          <img className="Work-HeaderImage" src="/work/work.jpg" />
        </header>

        <div style={{ display: 'flex' }}>
          <div>All</div>
          <div>Robotics</div>
          <div>Development</div>
          <div>Farming</div>
        </div>

        
      </div>
    </div>
  );
}
