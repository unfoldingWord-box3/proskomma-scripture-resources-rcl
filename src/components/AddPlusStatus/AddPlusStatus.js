import React, {Fragment, useState} from 'react';

import StoreStatus from '../StoreStatus';
import AddDocument from '../AddDocument';

const AddPlusStatus = () => {
    const [pkChangeId, setPkChangeId] = useState(0);
    return (
        <Fragment>
            <StoreStatus changeId={pkChangeId} />
            <AddDocument changeId={pkChangeId} setChangeId={setPkChangeId}/>
        </Fragment>
    );
};

export default AddPlusStatus;
