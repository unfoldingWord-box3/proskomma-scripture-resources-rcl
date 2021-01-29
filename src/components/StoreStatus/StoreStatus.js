import React, { useContext } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ProskommaContext from '../../ProskommaContext/ProskommaContext';

const StoreStatus = () => {
    const pk = useContext(ProskommaContext);
    const nDocSets = pk.nDocSets();
    const nDocuments = pk.nDocuments();
    console.log(pk);
    return (<CardContent>
        <Typography variant="h6">Proskomma Store Status (id={pk.processorId})</Typography>
        <Typography variant="body2">{nDocSets} DocSet{nDocSets === 1 ? "" : "s"}</Typography>
        <Typography variant="body2">{nDocuments} Document{nDocuments === 1 ? "" : "s"}</Typography>
    </CardContent>)
};

export default StoreStatus;