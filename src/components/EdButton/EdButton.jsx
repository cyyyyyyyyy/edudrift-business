import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const EdButton = withStyles({
  root: {
    padding: '3px 12px',
    borderRadius: '10px',
    color: '#fff',
    backgroundColor: '#DD864B',
    '&:hover': {
      backgroundColor: '#DD864B'
    }
  },
  sizeSmall: {
    padding: '1px 10px'
  },
  sizeLarge: {}
})(Button);

export default EdButton;
