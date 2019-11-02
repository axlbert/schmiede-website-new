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
function PersonalOverlay() {
  return (
    <div className="MemberCard-Professional Card-ImageOverlay Card-ImageOverlay_red">
      <header>
        <div className="MemberCard-HeaderText">Lima, Peru</div>
      </header>
      <div className="MemberCard-Quote">
        “Give me a book and chocolates, i'll be in paradise.”
      </div>
      <table className="MemberCard-Table">
        <tbody>
          <tr className="MemberCard-TableTr">
            <th className="MemberCard-TableTh MemberCard_borderBottom">
              Book:
            </th>
            <td className="MemberCard-TableTd MemberCard_borderBottom">
              El Extranjero
            </td>
          </tr>
          <tr className="MemberCard-TableTr">
            <th className="MemberCard-TableTh MemberCard_borderBottom">
              Color:
            </th>
            <td className="MemberCard-TableTd MemberCard_borderBottom">
              Black
            </td>
          </tr>
          <tr className="MemberCard-TableTr">
            <th className="MemberCard-TableTh MemberCard_borderBottom">
              Food:
            </th>
            <td className="MemberCard-TableTd MemberCard_borderBottom">
              Ceviche
            </td>
          </tr>
          <tr className="MemberCard-TableTr">
            <th className="MemberCard-TableTh">
              Vacation Spot:
            </th>
            <td className="MemberCard-TableTd">
              Italy
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/**
 * Member Card component.
 */
export default function MemberCard({ name, role, imageSrc, professional }) {
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
        { activeIndex === 1 && <PersonalOverlay /> }
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
