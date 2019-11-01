import React from 'react';

import './dot-controls.css';

export default function DotControls({ length, activeIndex, onClick }) {
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < length; i++) {
      const dotClassName = 'DotControl-Fill ' +
        (i === activeIndex && 'DotControl-Fill_active');
      dots.push(
        <button
          key={i}
          className="DotControl"
          onClick={ e => onClick(e, i) }
        >
          <div className={dotClassName}></div>
        </button>
      );
    }
    return dots;
  }

  return (
    <div className="DotControls">
      { renderDots() }
    </div>
  );
}
