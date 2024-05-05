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
            'Água': 0,
            'Refrigerante': 0,
            'Cerveja': 0
        }

        selectedDrinks.forEach((drink) => {
            if (drink.name === 'Água') {
                totalVolumePerDrink['Água'] += (guests.man + guests.woman + guests.kid) * 1.5
            } else if (drink.name === 'Refrigerante') {
                totalVolumePerDrink['Refrigerante'] += (guests.man + guests.woman + guests.kid) * 0.35 * 4
            } else if (drink.name === 'Cerveja') {
                totalVolumePerDrink['Cerveja'] += (guests.man + guests.woman) * 0.35 * 4
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

    const calculateTotalPrice = () => {
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
