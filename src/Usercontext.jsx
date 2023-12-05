
import React, { createContext, useContext, useState } from 'react';

//create new context
const CityContext = createContext();

//create provider context

export const CityContextProvider = ({ children }) => {
    const [mainCity, setMainCity] = useState('Banglore');



    return (
        <CityContext.Provider value={{ mainCity, setMainCity }}>
            {children}
        </CityContext.Provider>
    )
}

//create hook to use context

export const useCityContext = () => {
    return useContext(CityContext)
}