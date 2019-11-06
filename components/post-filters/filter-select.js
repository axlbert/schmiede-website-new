import React from 'react';
import { InputBase, MenuItem, Select } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import './filter-select.css';
import PostTag from '../post-tag.enum';

const StyledSelect = withStyles({
  select: {
    '&': {
      display: 'inline-flex',
      alignItems: 'center',
      minWidth: '6rem',
      height: '2.5rem',
      border: 'none',
      borderRadius: '2.5rem',
      padding: '0 1rem',
      backgroundColor: '#df1720',
      color: 'white',
      fontSize: '.8rem',
    },
    '&:focus': {
      borderRadius: '2.5rem',
      backgroundColor: '#df1720',
    },
  },
})(Select);

/**
 * Custom select dropdown icon.
 */
function DropdownIcon() {
  return <i className="FilterSelect-Icon material-icons">
    keyboard_arrow_down
  </i>
}

/**
 * Filter select component.
 */
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
    <StyledSelect
      value={filter}
      onChange={handleChange}
      input={ <InputBase /> }
      IconComponent={DropdownIcon}
    >
      <MenuItem value={PostTag.ALL}>All</MenuItem>
      <MenuItem value={PostTag.ROBOTICS}>Robotics</MenuItem>
      <MenuItem value={PostTag.DEVELOPMENT}>Development</MenuItem>
      <MenuItem value={PostTag.FARMING}>Farming</MenuItem>
    </StyledSelect>
  );
}
