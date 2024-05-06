import React, { useContext } from 'react'
import { Text, TouchableOpacity, View, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { CalculatorContext } from '../../contexts/CalculatorContext'
import { styles } from './styles'

export default function CalculateButton() {
    const navigation = useNavigation()
    
    const { guests, selectedMeats, selectedDrinks } = useContext(CalculatorContext)

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

    const calculateTotalDrinkVolume = () => {
        let totalVolumePerDrink = {
            'Cerveja': 0,
            'Refrigerante': 0,
            'Água': 0
        }

        selectedDrinks.forEach((drink) => {
            if (drink.alcoholic) {
                totalVolumePerDrink[drink.name] = (guests.man + guests.woman) * drink.volume * drink.servings
            }
            else {
                totalVolumePerDrink[drink.name] = (guests.man + guests.woman + guests.kid) * drink.volume * drink.servings
            }
        })

        return totalVolumePerDrink
    }
    
    const calculateMeatPrices = () => {
        // Inicializar o preço das carnes como zero
        let meatPrices = 0 

        selectedMeats.forEach((meat) => {
            meatPrices += meat.price
        })

        return meatPrices
    }
    
    const calculateIndividualPrice = () => {
        // Cálculo do preço individual
        console.log(calculateIndividualDrinksPrice())
        const individualPrice = {
            man: calculateMeatPrices() * 0.6 / selectedMeats.length,
            woman: calculateMeatPrices() * 0.4 / selectedMeats.length,
            kid: calculateMeatPrices() * 0.25 / selectedMeats.length
        }

        // Iterar sobre os tipos de convidados que têm pelo menos 1 pessoa
        Object.keys(guests).forEach((type) => {
            if (guests[type] === 0) {
                delete individualPrice[type]
            }
        })

        return individualPrice
    }
    
    const calculateIndividualDrinksPrice = () => {
        // Cálculo do preço individual
        let individualPrice = {
            man: 0,
            woman: 0,
            kid: 0
        }

        Object.keys(guests).forEach((type) => {
            if (guests[type] === 0){
                delete individualPrice[type]
            }
            else {
                selectedDrinks.forEach((drink) => {
                    if(!(drink.alcoholic && type === 'kid')) {
                        individualPrice[type] += drink.servings * drink.price
                    } 
                })
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
            const totalKgPerMeat = calculateKgPerMeat()

            const totalVolumePerDrink = calculateTotalDrinkVolume()
            
            const individualPrice = calculateIndividualPrice()

            navigation.navigate('Result', { selectedMeats, selectedDrinks, totalKgPerMeat, totalVolumePerDrink, individualPrice })
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
