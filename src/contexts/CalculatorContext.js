import React, { useState, createContext } from 'react'

export const CalculatorContext = createContext()

export default function CalculatorProvider({ children }) {

    const calculateTotalMeatKg = () => {
        // Cálculo do total de quilogramas de carne
        const totalMeatKg = 0.6 * guests.man + 0.4 * guests.woman + 0.25 * guests.kid

        return totalMeatKg
    }

    const calculateBarbecueSauceQuantity = () => {
        const BarbecueSauceQuantity = Math.ceil(calculateTotalMeatKg() * 150 / 200)

        return BarbecueSauceQuantity
    }

    const [guests, setGuests] = useState({
        man: 0,
        woman: 0,
        kid: 0
    })

    const coalQuantity = calculateTotalMeatKg()
    const BarbecueSauceQuantity = calculateBarbecueSauceQuantity()

    const meats = [
        { name: 'Picanha', price: 58.00, type: 'beef', image: require('../../assets/coal.png') },
        { name: 'Costela', price: 27.00, type: 'beef', image: require('../../assets/soda.png') },
        { name: 'Alcatra', price: 43.00, type: 'beef', image: require('../../assets/coal.png') },
        { name: 'Lombinho', price: 36.00, type: 'pork', image: require('../../assets/coal.png') },
        { name: 'Pernil', price: 28.00, type: 'pork', image: require('../../assets/coal.png') },
        { name: 'Linguiça toscana', price: 28.00, type: 'pork', image: require('../../assets/coal.png') },
        { name: 'Coxa', price: 14.00, type: 'chicken', image: require('../../assets/coal.png') },
        { name: 'Asa', price: 14.00, type: 'chicken', image: require('../../assets/coal.png') },
        { name: 'Peito', price: 23.00, type: 'chicken', image: require('../../assets/coal.png') }
    ]

    const drinks = [
        { name: 'Água', price: 6.00, image: require('../../assets/water.png'), volume: 1500, servings: 1, alcoholic: false },
        { name: 'Refrigerante', price: 4.00, image: require('../../assets/soda.png'), volume: 350, servings: 4, alcoholic: false },
        { name: 'Cerveja', price: 4.50, image: require('../../assets/coarseSalt.png'), volume: 350, servings: 4, alcoholic: true },
    ]

    const consumables = [
        { name: 'Carvão', price: 9.00, image: require('../../assets/coal.png'), quantity: coalQuantity },
        { name: 'Sal grosso', price: 5.90, image: require('../../assets/coarseSalt.png'), quantity: 1},
        { name: 'Molho barbecue', price: 19.00, image: require('../../assets/coarseSalt.png'), quantity: BarbecueSauceQuantity },
    ]   

    const [selectedMeats, setSelectedMeats] = useState([])
    const [selectedDrinks, setSelectedDrinks] = useState([])
    const [selectedConsumables, setSelectedConsumables] = useState([])

    return (
        <CalculatorContext.Provider
            value={{
                guests,
                setGuests,
                meats,
                drinks,
                consumables,
                selectedMeats,
                setSelectedMeats,
                selectedDrinks,
                setSelectedDrinks,
                selectedConsumables,
                setSelectedConsumables
            }}
        >
            {children}
        </CalculatorContext.Provider>
    )
}
