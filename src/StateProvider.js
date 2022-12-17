import { React, createContext, useState } from 'react';

export const StateContext = createContext();

const StateProvider = ({ children }) => {

    const [input, setInput] = useState("");

    return (
        <StateContext.Provider value={{ input, setInput }}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider
