import React, { createContext, useState, useContext } from 'react';
import { ProsKomma } from 'proskomma';

export const ProskommaContext = createContext({});

export default function ProsKommaContextProvider(props) {
  const pk = new ProsKomma();
  const [pkChangeId, setPkChangeId] = useState(0);

  const value = {
    pk,
    pkChangeId,
    setPkChangeId,
  };

  return (
    <ProskommaContext.Provider value={value}>
      {props.children}
    </ProskommaContext.Provider>
  );
}
