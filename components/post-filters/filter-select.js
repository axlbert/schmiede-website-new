import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';

import PostTag from '../post-tag.enum';

export default function FilterSelect({ filter, onChange }) {
  function handleChange(e) {
    onChange && onChange(e.target.value);
  }

  /*return (
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
  );*/
  return (
    <FormControl>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={filter}
        onChange={handleChange}
      >
        <MenuItem value={PostTag.ALL}>All</MenuItem>
        <MenuItem value={PostTag.ROBOTICS}>Robotics</MenuItem>
        <MenuItem value={PostTag.DEVELOPMENT}>Development</MenuItem>
        <MenuItem value={PostTag.FARMING}>Farming</MenuItem>
      </Select>
    </FormControl>
  );
}
