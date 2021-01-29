import React, { useContext, useEffect, useState } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ProskommaContext from '../../ProskommaContext/ProskommaContext';

const StoreStatus = ({changeId}) => {
    const pk = useContext(ProskommaContext);
    const [nDocSets, setNDocSets] = useState(0);
    const [nDocuments, setNDocuments] = useState(0);
    useEffect(() => {
        setNDocSets(pk.nDocSets());
        setNDocuments(pk.nDocuments());
        },
        [changeId]
    );
    return (<CardContent>
        <Typography variant="h6">Proskomma Store Status (id={pk.processorId})</Typography>
        <Typography variant="body2">{nDocSets} DocSet{nDocSets === 1 ? "" : "s"}</Typography>
        <Typography variant="body2">{nDocuments} Document{nDocuments === 1 ? "" : "s"}</Typography>
    </CardContent>)
};

export default StoreStatus;