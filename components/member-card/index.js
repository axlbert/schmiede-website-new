import React, { useState } from 'react';

import './member-card.css';
import DotControls from '../dot-controls';

/**
 * Member Card Professional Overlay component.
 */
function ProfessionalOverlay({ sinceYear, quote, description }) {
  return (
    <div className="MemberCard-Professional Card-ImageOverlay Card-ImageOverlay_gray">
      <header>
        <div className="MemberCard-HeaderTextSmall">Team member since</div>
        <div className="MemberCard-HeaderText">{ sinceYear }</div>
      </header>
      <div className="MemberCard-Quote">
        “{ quote }”
      </div>
      <div className="MemberCard-Description">
        { description }
      </div>
    </div>
  );
}

/**
 * Member Card Personal Overlay component.
 */
function PersonalOverlay({ location, quote }) {
  return (
    <div className="MemberCard-Professional Card-ImageOverlay Card-ImageOverlay_red">
      <header>
        <div className="MemberCard-HeaderText">{ location }</div>
      </header>
      <div className="MemberCard-Quote">
        “{ quote }”
      </div>

      <div className="MemberCard-Table">
        <div className="MemberCard-TableRow">
          <div className="MemberCard-TableCell MemberCard-TableCell_bolder">
            Book:
          </div>
          <div className="MemberCard-TableCell">
            El Extranjero
          </div>
        </div>
        <div className="MemberCard-TableRow">
          <div className="MemberCard-TableCell MemberCard-TableCell_bolder">
            Color:
          </div>
          <div className="MemberCard-TableCell">
            Black
          </div>
        </div>
        <div className="MemberCard-TableRow">
          <div className="MemberCard-TableCell MemberCard-TableCell_bolder">
            Food:
          </div>
          <div className="MemberCard-TableCell">
            Ceviche
          </div>
        </div>
        <div className="MemberCard-TableRow">
          <div className="MemberCard-TableCell MemberCard-TableCell_bolder">
            Vacation Spot:
          </div>
          <div className="MemberCard-TableCell">
            Italy
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Member Card component.
 */
export default function MemberCard({
  name, role, imageSrc, personal, professional,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextOverlay = e => {
    e.preventDefault();
    setActiveIndex(i => (i === 2) ? 0 : (i + 1));
  };

  return (
    <div className="Card">
      <div
        className="Card-ImageWrapper"
        style={{ cursor: 'pointer' }}
        onClick={nextOverlay}
      >
        <img className="Card-Image" src={imageSrc} />
        { activeIndex === 1 && <PersonalOverlay {...personal} /> }
        { activeIndex === 2 && <ProfessionalOverlay {...professional} /> }
      </div>
      <div
        className="Card-Footer"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div className="Card-Info">
          <div className="Card-Title">{ name }</div>
          <div className="Card-Subtitle">{ role }</div>
        </div>
        <div style={{ paddingTop: '0.15rem' }}>
          <DotControls
            length={3}
            activeIndex={activeIndex}
            onClick={ (e, i) => setActiveIndex(i) }
          />
        </div>
      </div>
    </div>
  );
}
