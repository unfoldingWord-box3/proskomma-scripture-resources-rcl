import React, {createContext, useContext, useEffect, useState} from 'react';
import {ProskommaClassContext} from '../ProskommaClass/index';

export const ProskommaContext = createContext({});

export default function ProsKommaContextProvider({children}) {
    const { pk } = useContext(ProskommaClassContext);
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

export const ProskommaStateContext = createContext(pk);
