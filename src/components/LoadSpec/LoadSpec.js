import React, { useContext, useEffect, useState } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ProskommaContext } from '../../ProskommaContext';

const LoadSpec = () => {
  return (
    <CardContent>
      <Typography variant="h6">
          DCS Load Spec
      </Typography>
    </CardContent>
  );
};

export default LoadSpec;
