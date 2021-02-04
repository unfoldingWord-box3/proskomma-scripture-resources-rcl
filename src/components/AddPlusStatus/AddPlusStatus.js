import React from 'react';
import StoreStatus from '../StoreStatus';
import AddDocument from '../AddDocument';
import ProsKommaContextProvider from '../../ProskommaContext';
import ProsKommaClassProvider from '../../ProskommaClass';

const AddPlusStatus = () => {
    return (
        <ProsKommaClassProvider>
            <ProsKommaContextProvider>
                <StoreStatus/>
                <AddDocument/>
            </ProsKommaContextProvider>
        </ProsKommaClassProvider>
    );
};

export default AddPlusStatus;
