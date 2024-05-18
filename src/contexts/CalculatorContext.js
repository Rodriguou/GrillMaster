import React, { useState, createContext } from 'react'

export const CalculatorContext = createContext()

export default function CalculatorProvider({ children }) {
    const [guests, setGuests] = useState({
        man: 0,
        woman: 0,
        kid: 0
    })
    
    const calculateTotalMeatKg = () => {
        // Cálculo do total de quilogramas de carne
        const totalMeatKg = 0.6 * guests.man + 0.4 * guests.woman + 0.25 * guests.kid
        
        return totalMeatKg
    }

    const totalMeatKg = calculateTotalMeatKg()

    const calculateBarbecueSauceQuantity = () => {
        const barbecueSauceQuantity = Math.ceil(calculateTotalMeatKg() * 150 / 200)

        return barbecueSauceQuantity
    }

    const barbecueSauceQuantity = calculateBarbecueSauceQuantity()

    const meats = [
        {name: 'Picanha', price: 58.00, type: 'beef', image: require('../../assets/picanha.png')},
        {name: 'Costela', price: 27.00, type: 'beef', image: require('../../assets/rib.png')},
        {name: 'Alcatra', price: 43.00, type: 'beef', image: require('../../assets/rump.png')},
        {name: 'Lombinho', price: 36.00, type: 'pork', image: require('../../assets/porkLoin.png')},
        {name: 'Pernil', price: 28.00, type: 'pork', image: require('../../assets/porkLeg.png')},
        {name: 'Linguiça toscana', price: 28.00, type: 'pork', image: require('../../assets/tuscanSausage.png')},
        {name: 'Coxa', price: 14.00, type: 'chicken', image: require('../../assets/chickenTigh.png')},
        {name: 'Asa', price: 14.00, type: 'chicken', image: require('../../assets/chickenWing.png')},
        {name: 'Peito', price: 23.00, type: 'chicken', image: require('../../assets/chickenBreast.png')}
    ]

    const drinks = [
        {name: 'Água', price: 6.00, image: require('../../assets/water.png'), volume: 1500, servings: 1, alcoholic: false},
        {name: 'Refrigerante', price: 4.00, image: require('../../assets/soda.png'), volume: 350, servings: 4, alcoholic: false},
        {name: 'Cerveja', price: 4.50, image: require('../../assets/beer.png'), volume: 350, servings: 4, alcoholic: true},
    ]

    const consumables = [
        {name: 'Carvão', price: 9.00, image: require('../../assets/coal.png'), quantity: totalMeatKg, proportional: false},
        // {name: 'Sal grosso', price: 5.90, image: require('../../assets/coarseSalt.png'), quantity: 1, proportional: true},
        // {name: 'Molho barbecue', price: 19.00, image: require('../../assets/barbecueSauce.png'), quantity: barbecueSauceQuantity, proportional: true},
    ]

    const [selectedMeats, setSelectedMeats] = useState([])
    const [selectedDrinks, setSelectedDrinks] = useState([])
    const [selectedConsumables, setSelectedConsumables] = useState([])

    const calculateKgPerMeat = () => {
        // Cálculo de quilogramas por carne
        const totalKgPerMeat = calculateTotalMeatKg() / selectedMeats.length

        return totalKgPerMeat
    }

    const calculateMeatPrices = () => {
        // Inicializar o preço das carnes como zero
        let meatPrices = 0

        selectedMeats.forEach((meat) => {
            meatPrices += meat.price
        })

        return meatPrices
    }

    const calculateIndividualMeatPrice = () => {
        // Cálculo do preço individual
        const individualMeatPrice = {
            man: calculateMeatPrices() * 0.6 / selectedMeats.length,
            woman: calculateMeatPrices() * 0.4 / selectedMeats.length,
            kid: calculateMeatPrices() * 0.25 / selectedMeats.length
        }

        // Iterar sobre os tipos de convidados que têm pelo menos 1 pessoa
        Object.keys(guests).forEach((type) => {
            if (guests[type] === 0) {
                delete individualMeatPrice[type]
            }
        })

        return individualMeatPrice
    }

    const calculateTotalMeatPrice = () => {
        // Cálculo do preço total de carnes
        const totalMeatPrice = calculateKgPerMeat() * calculateMeatPrices()

        return totalMeatPrice
    }

    const calculateVolumePerDrink = () => {
        let volumePerDrink = {
            'Cerveja': 0,
            'Refrigerante': 0,
            'Água': 0
        }

        selectedDrinks.forEach((drink) => {
            if (drink.alcoholic) {
                volumePerDrink[drink.name] = (guests.man + guests.woman) * drink.volume * drink.servings
            } else {
                volumePerDrink[drink.name] = (guests.man + guests.woman + guests.kid) * drink.volume * drink.servings
            }
        })

        return volumePerDrink
    }

    const calculateTotalDrinkVolume = () => {
        let totalDrinkVolume = 0

        Object.values(calculateVolumePerDrink()).forEach((drinkVolume) =>
            totalDrinkVolume += drinkVolume
        )

        return totalDrinkVolume
    }

    const calculateIndividualDrinksPrice = () => {
        // Cálculo do preço individual
        let individualDrinksPrice = {
            man: 0,
            woman: 0,
            kid: 0
        }

        Object.keys(guests).forEach((type) => {
            if (guests[type] === 0) {
                delete individualDrinksPrice[type]
            } else {
                selectedDrinks.forEach((drink) => {
                    if (!(drink.alcoholic && type === 'kid')) {
                        individualDrinksPrice[type] += drink.servings * drink.price
                    }  
                })
            }
        })

        return individualDrinksPrice
    }

    const calculateConsumablesPrices = () => {
        // Cálculo do preço dos consumíveis
        const consumablePrices = {
            'Carvão': 0,
            'Sal grosso': 0,
            'Molho barbecue': 0 
        }        

        selectedConsumables.forEach((consumable) => {
            if (consumable.quantity === 0) {
                delete consumablePrices[consumable.name]
            } else {
                consumablePrices[consumable.name] = consumable.quantity * consumable.price
            }        
        })        

        return consumablePrices
    }        
    
    const calculateTotalConsumablesPrice = () => {
        let totalConsumablesPrice = 0

        Object.values(calculateConsumablesPrices()).forEach((consumablePrice) =>
            totalConsumablesPrice += consumablePrice        
        )

        return totalConsumablesPrice
    }

    const calculateIndividualConsumablesPrice = () => { // verificar se o cálculo está correto
        // Cálculo do preço individual
        const individualConsumablePrice = {
            man: calculateTotalConsumablesPrice() * 0.6,
            woman: calculateTotalConsumablesPrice() * 0.4,
            kid: calculateTotalConsumablesPrice() * 0.25
        }        

        // Iterar sobre os tipos de convidados que têm pelo menos 1 pessoa
        Object.keys(guests).forEach((type) => {
            if (guests[type] === 0) {
                delete individualConsumablePrice[type]
            }        
        })        

        return individualConsumablePrice
    }

    const calculateIndividualPrice = () => {
        // Cálculo do preço individual
        const individualDrinksPrice = calculateIndividualDrinksPrice()
        const individualMeatPrice = calculateIndividualMeatPrice()
        const individualConsumablesPrice = calculateIndividualConsumablesPrice()
        const individualPrice = {
            man: 0,
            woman: 0,
            kid: 0
        }

        Object.keys(guests).forEach((type) => {
            if (guests[type] === 0) {
                delete individualPrice[type]
            } else {
                individualPrice[type] = individualDrinksPrice[type] + individualMeatPrice[type] + individualConsumablesPrice[type]
            }
        })

        return individualPrice
    }

    const totalDrinkVolume = calculateTotalDrinkVolume()

    const totalKgPerMeat = calculateKgPerMeat()

    const volumePerDrink = calculateVolumePerDrink()
    
    const individualPrice = calculateIndividualPrice()

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
                setSelectedConsumables,
                totalMeatKg,
                totalDrinkVolume,
                totalKgPerMeat,
                volumePerDrink,
                individualPrice
            }}
        >
            {children}
        </CalculatorContext.Provider>
    )
}
