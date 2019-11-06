import React from 'react';

import './filters.css';
import Pills from './pills';
import FilterSelect from './filter-select';

export default function PostFilters({ filter, onChange }) {
  return (
    <div>
      <div className="Filters-Select">
        <FilterSelect filter={filter} onChange={onChange} />
      </div>

      <div className="Filters-Pills">
        <Pills filter={filter} onChange={onChange} />
      </div>
    </div>
  );
}
