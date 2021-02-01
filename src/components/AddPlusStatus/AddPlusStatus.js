import React from 'react';
import StoreStatus from '../StoreStatus';
import AddDocument from '../AddDocument';
import ProsKommaContextProvider from '../../ProskommaContext';

const AddPlusStatus = () => {
  return (
    <ProsKommaContextProvider>
      <StoreStatus />
      <AddDocument />
    </ProsKommaContextProvider>
  );
};

export default AddPlusStatus;
