import React, { useContext, useEffect, useState } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ProskommaContext } from '../../ProskommaContext';

const StoreStatus = () => {
  const { pk } = useContext(ProskommaContext);

  return (
    <CardContent>
      <Typography variant="h6">
        Proskomma Store Status
      </Typography>
      <Typography variant="body2">
        {pk.nDocSets()} DocSet{pk.nDocSets() === 1 ? '' : 's'}
      </Typography>
      <Typography variant="body2">
        {pk.nDocuments()} Document{pk.nDocuments() === 1 ? '' : 's'}
      </Typography>
    </CardContent>
  );
};

export default StoreStatus;
