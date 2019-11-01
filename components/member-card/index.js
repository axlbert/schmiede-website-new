import React from 'react';

import './member-card.css';
import DotControls from '../dot-controls';

export default function MemberCard() {
  return (
    <div className="Card">
      <div className="Card-ImageWrapper">
        <img className="Card-Image" src="/about/member-2.jpg" />
        <div className="MemberCard-Professional Card-ImageOverlay Card-ImageOverlay_gray">
          <header>
            <div className="MemberCard-HeaderTextSmall">Team member since</div>
            <div className="MemberCard-HeaderText">2017</div>
          </header>
          <div className="MemberCard-Quote">
            “Make it simple but significant.”
          </div>
          <div className="MemberCard-Description">
            Coming from the fashion industry, I am working at Schmiede.one 
            on things that display my true passions which are: food, 
            agriculture, and innovative business models.
            My project range is, from our test field to pure software projects 
            to Indoor farming, which makes working at Schmiede.one very diverse.
          </div>
        </div>
      </div>
      <div
        className="Card-Footer"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div className="Card-Info">
          <div className="Card-Title">Analisa</div>
          <div className="Card-Subtitle">Developer</div>
        </div>
        <div style={{ paddingTop: '0.15rem' }}>
          <DotControls length={3} />
        </div>
      </div>
    </div>
  );
}
