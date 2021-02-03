import React, { createContext, useState, useContext, useEffect } from 'react';
import { ProsKomma } from 'proskomma';

const pk = new ProsKomma();
export const ProskommaStateContext = createContext(pk);

export const ProskommaContext = createContext({});

export default function ProsKommaContextProvider({ children, importSpecs }) {
  const pk = useContext(ProskommaStateContext);
  const [pkChangeId, setPkChangeId] = useState(0);

  useEffect(
      () => {
        if (importSpecs) {
          for (const importSpec of importSpecs) {
            console.log(importSpec);
          }
        }
      },
      []
  );

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
