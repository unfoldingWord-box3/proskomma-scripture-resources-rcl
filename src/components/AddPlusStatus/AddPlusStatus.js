import React from 'react';
import StoreStatus from '../StoreStatus';
import AddDocument from '../AddDocument';
import ProsKommaContextProvider from '../../ProskommaContext';
import { ProsKomma } from 'proskomma';

const AddPlusStatus = () => {
    return (
        <ProsKommaContextProvider pkClass={ProsKomma}>
            <StoreStatus/>
            <AddDocument/>
        </ProsKommaContextProvider>
    );
};

export default AddPlusStatus;
