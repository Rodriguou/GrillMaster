import React, { useState, createContext, useEffect } from 'react'

export const CalculatorContext = createContext()

export default function CalculatorProvider({ children }) {
    const [guests, setGuests] = useState({
        man: 0,
        woman: 0,
        kid: 0
    })

    const getGuests = () => {
        return Object.entries(guests)
            .filter(([_, count]) => count > 0)

            .map(([type, count]) => ({ type, count }));
    }

    const getTotalGuests = () => {
        return Object.values(guests).reduce((total, count) => total + count, 0)
    }
    
    const calculateTotalMeatKg = () => {
        // Cálculo do total de quilogramas de carne
        const totalMeatKg = 0.6 * guests.man + 0.4 * guests.woman + 0.25 * guests.kid
        
        return totalMeatKg
    }

    const updateConsumableQuantity = () => {
        selectedConsumables.forEach((consumable) => {
            selectedConsumables[consumable.name] = { ...selectedConsumables[consumable.name], quantity: calculateTotalMeatKg() }; 

        })
    }

    const updateSideDishQuantity = () => {
        selectedSideDishes.forEach((sideDish) => {
            selectedSideDishes[sideDish.name] = { ...selectedSideDishes[sideDish.name], quantity: 5 }; 

        })
    }

    const totalMeatKg = calculateTotalMeatKg()
    
    // const calculateBarbecueSauceQuantity = () => {
    //     const barbecueSauceQuantity = Math.ceil(calculateTotalMeatKg() * 150 / 200)
        
    //     return barbecueSauceQuantity
    // }
    
    // const barbecueSauceQuantity = calculateBarbecueSauceQuantity()

    const calculateGarlicBreadQuantity = () => {
        const garlicBreadQuantity = Math.ceil((guests.man + guests.woman + guests.kid) * 50 / 400);

        return garlicBreadQuantity;
    }
    
    const garlicBreadQuantity = calculateGarlicBreadQuantity();

    const calculateFarofaQuantity = () => {
        const farofaQuantity = Math.ceil((guests.man + guests.woman + guests.kid) * 50 / 500);

        return farofaQuantity;
    }
    
    const farofaQuantity = calculateFarofaQuantity();

    const calculateRiceQuantity = () => {
        const riceQuantity = Math.ceil((guests.man + guests.woman + guests.kid) * 100 / 1000);

        return riceQuantity;
    }
    
    const riceQuantity = calculateRiceQuantity();
    
    const meats = [
        {name: 'Picanha', price: 58.00, type: 'beef', image: require('../../assets/picanha.png')},
        {name: 'Costela', price: 27.00, type: 'beef', image: require('../../assets/rib.png')},
        {name: 'Alcatra', price: 43.00, type: 'beef', image: require('../../assets/rump.png')},
        {name: 'Lombinho', price: 36.00, type: 'pork', image: require('../../assets/porkLoin.png')},
        {name: 'Pernil', price: 28.00, type: 'pork', image: require('../../assets/porkLeg.png')},
        {name: 'Linguiça toscana', price: 28.00, type: 'pork', image: require('../../assets/tuscanSausage.png')},
        {name: 'Coxa', price: 14.00, type: 'chicken', image: require('../../assets/chickenThigh.png')},
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
    
    const sideDishes = [
        {name: 'Pão de Alho', price: 12.00, image: require('../../assets/garlicBread.png'), quantity: garlicBreadQuantity},
        {name: 'Farofa', price: 7.50, image: require('../../assets/farofa.png'), quantity: farofaQuantity},
        {name: 'Arroz', price: 9.00, image: require('../../assets/rice.png'), quantity: riceQuantity},
    ]
    
    const [selectedMeats, setSelectedMeats] = useState([])
    const [selectedDrinks, setSelectedDrinks] = useState([])
    const [selectedConsumables, setSelectedConsumables] = useState([])
    const [selectedSideDishes, setSelectedSideDishes] = useState([])
    
    useEffect(() => {
        updateConsumableQuantity()
        updateSideDishQuantity()
    }, [guests]);

    const calculateKgPerMeat = () => {
        const totalKgPerMeat = calculateTotalMeatKg() / selectedMeats.length

        return totalKgPerMeat
    }

    const calculateMeatPrices = () => {
        let meatPrices = 0

        selectedMeats.forEach((meat) => {
            meatPrices += meat.price
        })

        return meatPrices
    }

    const calculateIndividualMeatPrice = () => {
        const individualMeatPrice = {
            man: calculateMeatPrices() * 0.6 / selectedMeats.length,
            woman: calculateMeatPrices() * 0.4 / selectedMeats.length,
            kid: calculateMeatPrices() * 0.25 / selectedMeats.length
        }

        Object.keys(guests).forEach((type) => {
            if (!guests[type]) {
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
        let individualDrinksPrice = {
            man: 0,
            woman: 0,
            kid: 0
        }

        Object.keys(guests).forEach((type) => {
            if (!guests[type]) {
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

    const calculateTotalDrinkPrice = () => {
        const individualDrinksPrice = calculateIndividualDrinksPrice()
        let totalDrinkPrice = 0

        Object.keys(individualDrinksPrice).forEach((type) => {
            totalDrinkPrice += individualDrinksPrice[type] * guests[type]
        })

        return totalDrinkPrice
    }

    const calculateConsumablesPrices = () => {
        const consumablesPrices = {
            'Carvão': 0,
            // 'Sal grosso': 0,
            // 'Molho barbecue': 0 
        }        

        consumables.forEach((consumable) => {
            consumablesPrices[consumable.name] = consumable.quantity * consumable.price    
        })
        
        Object.keys(consumablesPrices).forEach((consumableName) => {
            if (!selectedConsumables.some((consumable) => consumable.name === consumableName)) {
                delete consumablesPrices[consumableName]
            }
        })

        return consumablesPrices
    }

    const calculateTotalConsumablesPrice = () => {
        let totalConsumablesPrice = 0
        
        Object.values(calculateConsumablesPrices()).forEach((consumablePrice) =>
            totalConsumablesPrice += consumablePrice        
        )

        return totalConsumablesPrice
    }

    const calculateIndividualConsumablesPrice = () => {
        const totalConsumablesPrice = calculateTotalConsumablesPrice()

        const individualConsumablePrice = {
            man: totalConsumablesPrice * 0.48 / (0.48 * guests.man + 0.32 * guests.woman + 0.2 * guests.kid),
            woman: totalConsumablesPrice * 0.32 / (0.48 * guests.man + 0.32 * guests.woman + 0.2 * guests.kid),
            kid: totalConsumablesPrice * 0.2 / (0.48 * guests.man + 0.32 * guests.woman + 0.2 * guests.kid)
        }

        Object.keys(guests).forEach((type) => {
            if (!guests[type]) {
                delete individualConsumablePrice[type]
            }        
        })        

        return individualConsumablePrice
    }

    const calculateSideDishesPrices = () => {
        // Cálculo do preço dos consumíveis
        const sideDishesPrices = {
            'Pão de Alho': 0,
            'Farofa': 0,
            'Arroz': 0 
        }        

        sideDishes.forEach((sideDish) => {
            sideDishesPrices[sideDish.name] = sideDish.quantity * sideDish.price    
        })
        
        Object.keys(sideDishesPrices).forEach((sideDishName) => {
            if (!selectedSideDishes.some((sideDish) => sideDish.name === sideDishName)) {
                delete sideDishesPrices[sideDishName]
            }
        })

        return sideDishesPrices
    }
    
    const calculateTotalSideDishesPrice = () => {
        let totalSideDishesPrice = 0

        Object.values(calculateSideDishesPrices()).forEach((sideDishPrice) =>
            totalSideDishesPrice += sideDishPrice        
        )

        return totalSideDishesPrice
    }

    const calculateIndividualSideDishesPrice = () => {
        const totalSideDishesPrice = calculateTotalSideDishesPrice()

        const individualSideDishesPrice = {
            man: totalSideDishesPrice / (guests.man + guests.woman + guests.kid),
            woman: totalSideDishesPrice / (guests.man + guests.woman + guests.kid),
            kid: totalSideDishesPrice / (guests.man + guests.woman + guests.kid)
        }

        Object.keys(guests).forEach((type) => {
            if (!guests[type]) {
                delete individualSideDishesPrice[type]
            }        
        })        

        return individualSideDishesPrice
    }

    const calculateIndividualPrice = () => {
        const individualDrinksPrice = calculateIndividualDrinksPrice()

        const individualMeatPrice = calculateIndividualMeatPrice()

        const individualConsumablesPrice = calculateIndividualConsumablesPrice()

        const individualSideDishesPrice = calculateIndividualSideDishesPrice()

        const individualPrice = {
            man: 0,
            woman: 0,
            kid: 0
        }

        Object.keys(guests).forEach((type) => {
            if (!guests[type]) {
                delete individualPrice[type]
            } else {
                individualPrice[type] = individualDrinksPrice[type] + individualMeatPrice[type] + individualConsumablesPrice[type] + individualSideDishesPrice[type]
            }
        })

        return individualPrice
    }

    const calculateTotalPrice = () => {
        const totalPrice = calculateTotalDrinkPrice() + calculateTotalMeatPrice() + calculateTotalConsumablesPrice() + calculateTotalSideDishesPrice()

        return totalPrice
    }

    const totalDrinkVolume = calculateTotalDrinkVolume()

    const totalKgPerMeat = calculateKgPerMeat()

    const volumePerDrink = calculateVolumePerDrink()
    
    const individualPrice = calculateIndividualPrice()

    const totalMeatPrice = calculateTotalMeatPrice()
    
    const totalDrinkPrice = calculateTotalDrinkPrice()
    
    const totalConsumablesPrice = calculateTotalConsumablesPrice()

    const totalSideDishesPrice = calculateTotalSideDishesPrice()
    
    const totalPrice = calculateTotalPrice()

    return (
        <CalculatorContext.Provider
            value={{
                guests,
                setGuests,
                getGuests,
                getTotalGuests,
                meats,
                drinks,
                consumables,
                sideDishes,
                selectedMeats,
                setSelectedMeats,
                selectedDrinks,
                setSelectedDrinks,
                selectedConsumables,
                setSelectedConsumables,
                selectedSideDishes,
                setSelectedSideDishes,
                totalMeatKg,
                totalDrinkVolume,
                totalKgPerMeat,
                volumePerDrink,
                individualPrice,
                totalMeatPrice,
                totalDrinkPrice,
                totalConsumablesPrice,
                totalSideDishesPrice,
                totalPrice
            }}
        >
            {children}
        </CalculatorContext.Provider>
    )
}
