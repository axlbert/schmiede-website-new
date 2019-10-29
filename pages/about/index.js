import React from 'react';

import './about.css';
import Nav from '../../components/nav';

const headerStyle = {
  backgroundImage: 'url("/about.jpg")',
};

export default function About() {
  return (
    <div className="About">
      <Nav />
      <header className="About-Header" style={headerStyle}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div>
                <span className="About-HeaderTitle">
                  We are a gang of creatives, developers, engeneers and managers 
                  from around the world working in Düsseldorf, Germany. 
                </span>
              </div>
              <div className="About-HeaderSubtitle">
                We are an innovation lab from GRIMME group. We give our 
                best everyday to make a difference in the AgTech world.
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
