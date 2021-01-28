import React from 'react';
import Button from '@material-ui/core/Button';

const StoreStatus = ({ text }) => (
    <Button variant="contained" color="primary">
        {text}
    </Button>
);

export default StoreStatus;