import React from 'react';

import './filters.css';
import Pills from './pills';

export default function PostFilters({ filter, onChange }) {
  return (
    <div>
      <div className="Filters-Select">
        <select className="Banner-Button">
          <option>All</option>
          <option>Robotics</option>
          <option>Development</option>
          <option>Farming</option>
        </select>
      </div>

      <div className="Filters-Pills">
        <Pills filter={filter} onChange={onChange} />
      </div>
    </div>
  );
}
