import React from 'react';

import './dot-controls.css';

export default function DotControls() {
  return (
    <div className="DotControls">
      <button className="DotControl">
        <div className="DotControl-Fill"></div>
      </button>
      <button className="DotControl">
        <div className="DotControl-Fill DotControl-Fill_active"></div>
      </button>
      <button className="DotControl">
        <div className="DotControl-Fill"></div>
      </button>
    </div>
  );
}
