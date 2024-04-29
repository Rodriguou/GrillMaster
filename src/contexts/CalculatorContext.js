import React, { useState, createContext } from 'react'

export const CalculatorContext = createContext()

export default function CalculatorProvider({ children }) {
    const [guests, setGuests] = useState({
        man: 0,
        woman: 0,
        kid: 0
    })

    const meats = [
        { name: 'Picanha', price: 58.00, type: 'beef', image: require('../../assets/coal.png') },
        { name: 'Costela', price: 27.00, type: 'beef', image: require('../../assets/soda.png') },
        { name: 'Maminha', price: 43.00, type: 'beef', image: require('../../assets/coal.png') },
        { name: 'Lombinho', price: 36.00, type: 'pork', image: require('../../assets/coal.png') },
        { name: 'Pernil', price: 28.00, type: 'pork', image: require('../../assets/coal.png') },
        { name: 'Paleta', price: 20.00, type: 'pork', image: require('../../assets/coal.png') },
        { name: 'Coxa', price: 14.00, type: 'chicken', image: require('../../assets/coal.png') },
        { name: 'Asa', price: 14.00, type: 'chicken', image: require('../../assets/coal.png') },
        { name: 'Coração', price: 35.00, type: 'chicken', image: require('../../assets/coal.png') }
    ]

    const [selectedMeats, setSelectedMeats] = useState([])

    return (
        <CalculatorContext.Provider value={{ guests, setGuests, meats, selectedMeats, setSelectedMeats }}>
            {children}
        </CalculatorContext.Provider>
    )
}
