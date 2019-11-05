import React from 'react';
import { Dialog } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledDialog = withStyles({
  paper: {
    '&': {
      borderRadius: 0,
      overflow: 'visible',
    },
  },
})(Dialog);

export default function PostDialog({ open, onClose, children }) {
  return (
    <StyledDialog
      maxWidth={'md'}
      scroll="body"
      open={open}
      onClose={onClose}
    >
      <button
        className="PostDialog-CloseButton"
        onClick={onClose}
      >
        <img
          className="PostDialog-CloseButtonImage"
          src="/close-button.svg"
          alt="Close"
        />
      </button>
      { children }
    </StyledDialog>
  );
}
