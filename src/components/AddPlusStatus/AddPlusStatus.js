import React, {Fragment} from 'react';

import StoreStatus from '../StoreStatus';
import AddDocument from '../AddDocument';

const AddPlusStatus = () => {
    return (
        <Fragment>
            <StoreStatus/>
            <AddDocument/>
        </Fragment>
    );
};

export default AddPlusStatus;
