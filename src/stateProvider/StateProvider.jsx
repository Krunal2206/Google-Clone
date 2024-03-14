import { createContext, useState } from 'react';

export const StateContext = createContext();

// eslint-disable-next-line react/prop-types
const StateProvider = ({ children }) => {

    const [input, setInput] = useState("");

    return (
        <StateContext.Provider value={{ input, setInput }}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider