import React, { createContext, useState, useContext } from 'react';
import { ProsKomma } from 'proskomma';

const pk = new ProsKomma();
export const ProskommaStateContext = createContext(pk);

export const ProskommaContext = createContext({});

export default function ProsKommaContextProvider({ children }) {
  const pk = useContext(ProskommaStateContext);
  const [pkChangeId, setPkChangeId] = useState(0);

  const value = {
    pk,
    pkChangeId,
    setPkChangeId,
  };

  return (
    <ProskommaContext.Provider value={value}>
      {children}
    </ProskommaContext.Provider>
  );
}
