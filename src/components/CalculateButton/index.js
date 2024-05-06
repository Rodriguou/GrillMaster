import React, { useContext } from 'react'
import { Text, TouchableOpacity, View, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { CalculatorContext } from '../../contexts/CalculatorContext'
import { styles } from './styles'

export default function CalculateButton() {
    const navigation = useNavigation()
    
    const { guests, selectedMeats, selectedDrinks, selectedConsumables } = useContext(CalculatorContext)

    const calculateTotalMeatKg = () => {
        // Cálculo do total de quilogramas de carne
        const totalMeatKg = 0.6 * guests.man + 0.4 * guests.woman + 0.25 * guests.kid

        return totalMeatKg
    }

    const calculateKgPerMeat = () => {
        // Cálculo de quilogramas por carne
        const totalKgPerMeat = calculateTotalMeatKg() / selectedMeats.length

        return totalKgPerMeat
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
            }
            else {
                volumePerDrink[drink.name] = (guests.man + guests.woman + guests.kid) * drink.volume * drink.servings
            }
        })

        return volumePerDrink
    }
    
    const calculateConsumablesPrices = () => {
        // Cálculo do preço dos consumíveis
        const consumablePrices = {
            'Carvão': 0,
            'Sal grosso': 0,
            'Molho barbecue': 0 
        }
        console.log(selectedConsumables)
        selectedConsumables.forEach((consumable) => {
            if (consumable.quantity === 0) {
                delete consumablePrices[consumable.name]
            }
            else {
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
    
    const calculateTotalDrinkVolume = () => {
        let totalDrinkVolume = 0

        Object.values(calculateVolumePerDrink()).forEach((drinkVolume) =>
            totalDrinkVolume += drinkVolume
        )

        return totalDrinkVolume
    }

    const calculateMeatPrices = () => {
        // Inicializar o preço das carnes como zero
        let meatPrices = 0

        selectedMeats.forEach((meat) => {
            meatPrices += meat.price
        })

        return meatPrices
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
    
    const calculateIndividualDrinksPrice = () => {
        // Cálculo do preço individual
        let individualDrinksPrice = {
            man: 0,
            woman: 0,
            kid: 0
        }
        
        Object.keys(guests).forEach((type) => {
            if (guests[type] === 0){
                delete individualDrinksPrice[type]
            }
            else {
                selectedDrinks.forEach((drink) => {
                    if(!(drink.alcoholic && type === 'kid')) {
                        individualDrinksPrice[type] += drink.servings * drink.price
                    } 
                })
            }
        })
        
        return individualDrinksPrice
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
            }
            else {
                individualPrice[type] = individualDrinksPrice[type] + individualMeatPrice[type] + individualConsumablesPrice[type]
            }
        })

        return individualPrice
    }

    const calculateTotalMeatPrice = () => {
        // Cálculo do preço total de carnes
        const totalMeatPrice = calculateKgPerMeat() * calculateMeatPrices()
        return totalMeatPrice
    }

    const handleCalculatePress = () => {
        const totalGuests = guests.man + guests.woman + guests.kid

        if (totalGuests === 0) {
            Alert.alert('Número de convidados inválido', 'Por favor, insira o número de convidados.')
        } else if (selectedMeats.length === 0) {
            Alert.alert('Nenhuma carne selecionada', 'Por favor, selecione pelo menos uma carne antes de calcular.')
        } else {
            const totalMeatKg = calculateTotalMeatKg()

            const totalDrinkVolume = calculateTotalDrinkVolume()

            const totalKgPerMeat = calculateKgPerMeat()

            const volumePerDrink = calculateVolumePerDrink()
            
            const individualPrice = calculateIndividualPrice()

            navigation.navigate('Result', { selectedMeats, selectedDrinks, totalMeatKg, totalDrinkVolume, totalKgPerMeat, volumePerDrink, individualPrice })
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleCalculatePress}>
                <Text style={styles.buttonText}>CONTINUAR</Text>
            </TouchableOpacity>
        </View>
    )
}
