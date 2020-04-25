import React from 'react';
import { CircularProgress } from '@material-ui/core';

import useStyles from './Loader.styles';

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.loadingWrapper}>
      <CircularProgress size={60} />
    </div>
  );
};

export default Loader;
