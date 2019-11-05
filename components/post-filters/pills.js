import React from 'react';

import './pills.css';
import PostTag from '../post-tag.enum';

const pills = [
  { label: 'All', filter: PostTag.ALL },
  { label: 'Robotics', filter: PostTag.ROBOTICS },
  { label: 'Development', filter: PostTag.DEVELOPMENT },
  { label: 'Farming', filter: PostTag.FARMING },
];

export default function Pills({ filter, onChange }) {
  function renderPills() {
    return pills.map((x, i) => {
      const pillClassName = 'Pills-Item' +
        (x.filter === filter ? ' Pills-Item_active' : '');
      return (
        <span
          key={i}
          className={pillClassName}
          onClick={() => {
            onChange && onChange(x.filter);
          }}
        >
          { x.label }
        </span>
      );
    });
  }

  return (
    <div className="Pills">
      { renderPills() }
    </div>
  );
}
