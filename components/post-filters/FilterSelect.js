import React from 'react';
import PostTag from '../post-tag.enum';

export default function FilterSelect({ filter, onChange }) {
  function handleChange(e) {
    onChange && onChange(e.target.value);
  }

  return (
    <select
      className="Banner-Button"
      value={filter}
      onChange={handleChange}
    >
      <option value={PostTag.ALL}>All</option>
      <option value={PostTag.ROBOTICS}>Robotics</option>
      <option value={PostTag.DEVELOPMENT}>Development</option>
      <option value={PostTag.FARMING}>Farming</option>
    </select>
  );
}
