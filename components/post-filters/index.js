import React from 'react';
import Pills from './pills';

export default function PostFilters() {
  return (
    <div>
      <div className="Work-Select" style={{ textAlign: 'left' }}>
        <select className="Banner-Button">
          <option>All</option>
          <option>Robotics</option>
          <option>Development</option>
          <option>Farming</option>
        </select>
      </div>

      <div className="Work-Pills">
        <Pills />
      </div>
    </div>
  );
}
