import React, { createContext, useState, useContext } from 'react';
import { ProsKomma } from 'proskomma';

const pk = new ProsKomma();
export const ProskommaStateContext = createContext(pk);

export const ProskommaContext = createContext({});

export default function ProsKommaContextProvider(props) {
  const pk = useContext(ProskommaStateContext);
  const [pkChangeId, setPkChangeId] = useState(0);

  const cValue = {
    pk,
    pkChangeId,
    setPkChangeId,
  };

  return (
    <ProskommaContext.Provider value={cValue}>
      {props.children}
    </ProskommaContext.Provider>
  );
}
