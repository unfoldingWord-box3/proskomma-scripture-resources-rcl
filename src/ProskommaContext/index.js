import React, {createContext, useContext, useEffect, useState} from 'react';

export const ProskommaContext = createContext({});

let pk;

export default function ProsKommaContextProvider({pkClass, children}) {
    const [pkChangeId, setPkChangeId] = useState(0);
    if (!pk) {pk = new pkClass()};

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
