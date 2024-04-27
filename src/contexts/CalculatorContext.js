import React, { useState, createContext } from 'react'

export const CalculatorContext = createContext()

export default function CalculatorProvider({ children }) {
    const [guests, setGuests] = useState({
        man: 0,
        woman: 0,
        kid: 0
    })

    return(
        <CalculatorContext.Provider value={{ guests, setGuests }}>
            {children}
        </CalculatorContext.Provider>
    )
}
