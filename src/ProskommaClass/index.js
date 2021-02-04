import React, {createContext, useContext, useEffect} from 'react';
import {ProsKomma} from 'proskomma';

// The idea is that this would be the context provider for vanilla Proskomma.
// uW would produce its own context provider, along similar lines, to provide UWProskomma
// Everything within this outer context should be the same regardless of the class of Proskomma provided

export default function ProsKommaClassProvider({children}) {
    const pkClass = ProsKomma;
    let pk;
    useEffect(
        () => {
          pk = new pkClass();
        },
        []
    );

    return (
        <ProskommaClassContext.Provider value={pk}>
            {children}
        </ProskommaClassContext.Provider>
    );
}

export const ProskommaClassContext = createContext({pk});
