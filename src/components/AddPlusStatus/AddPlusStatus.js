import React, {Fragment} from 'react';
import StoreStatus from '../StoreStatus';
import AddDocument from '../AddDocument';

const AddPlusStatus = ({pk}) => {
    return (
        <Fragment>
            <div>Version {pk.packageVersion()}</div>
            <StoreStatus pk={pk}/>
            <AddDocument pk={pk}/>
        </Fragment>
    );
};

export default AddPlusStatus;
