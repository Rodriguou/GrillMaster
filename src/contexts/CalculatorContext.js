import React, { useState, createContext } from 'react'

export const CalculatorContext = createContext()

export default function CalculatorProvider({ children }) {
    const [guests, setGuests] = useState({
        man: 0,
        woman: 0,
        kid: 0
    })

    const meats = [
        { name: 'Picanha', price: 35.00, type: 'beef', image: require('../../assets/coal.png') },
        { name: 'Costela', price: 32.90, type: 'beef', image: require('../../assets/soda.png') },
        { name: 'Maminha', price: 36.98, type: 'beef', image: require('../../assets/coal.png') },
        { name: 'Lombinho', price: 40.53, type: 'pork', image: require('../../assets/coal.png') },
        { name: 'Pernil', price: 32.99, type: 'pork', image: require('../../assets/coal.png') },
        { name: 'Paleta', price: 50.00, type: 'pork', image: require('../../assets/coal.png') },
        { name: 'Coxa', price: 30.00, type: 'chicken', image: require('../../assets/coal.png') },
        { name: 'Asa', price: 35.96, type: 'chicken', image: require('../../assets/coal.png') },
        { name: 'Coração', price: 80.74, type: 'chicken', image: require('../../assets/coal.png') }
    ]

    const [selectedMeats, setSelectedMeats] = useState([])

    return (
        <CalculatorContext.Provider value={{ guests, setGuests, meats, selectedMeats, setSelectedMeats }}>
            {children}
        </CalculatorContext.Provider>
    )
}
