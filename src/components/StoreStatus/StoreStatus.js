import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const StoreStatus = ({pk}) => {
    const nDocSets = pk.nDocSets();
    const nDocuments = pk.nDocuments();
    return (<CardContent>
        <Typography variant="h6">Proskomma Store Status</Typography>
        <Typography variant="body2">{nDocSets} DocSet{nDocSets === 1 ? "" : "s"}</Typography>
        <Typography variant="body2">{nDocuments} Document{nDocuments === 1 ? "" : "s"}</Typography>
    </CardContent>)
};

export default StoreStatus;