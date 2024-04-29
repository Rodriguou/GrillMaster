import React, { useContext } from 'react'
import { Text, TouchableOpacity, View, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { CalculatorContext } from '../../contexts/CalculatorContext'
import { styles } from './styles'

export default function CalculateButton() {
    const navigation = useNavigation()
    
    const { guests, selectedMeats } = useContext(CalculatorContext)

    const calculateTotalPrice = () => {
        // Cálculo do preço total de carnes
        const totalMeatPrice = calculateKgPerMeat() * calculateMeatPrices()
        return totalMeatPrice
    }   

    const calculateMeatPrices = () => {
        // Inicializar o preço das carnes como zero
        let meatPrices = 0 
        selectedMeats.forEach((meat) => {
            meatPrices += meat.price
        })
        return meatPrices
    }  

    const calculateTotalMeatKg = () => {
        // Cálculo do total de quilogramas de carne
        const totalMeatKg = 0.6 * guests.man + 0.4 * guests.woman + 0.25 * guests.kid
        return totalMeatKg
    }    

    const calculateKgPerMeat = () => {
        // Cálculo de quilogramas por carne
        const kgPerMeat = calculateTotalMeatKg() / selectedMeats.length
        return kgPerMeat
    }    

    const calculateIndividualPrice = () => {
        // Cálculo do preço individual
        const individualPrice = [{man: 0.6 * meatPrices}, {woman: 0.4 * meatPrices}, {kid: 0.25 * meatPrices}]
        return individualPrice
    }    

    const handleCalculatePress = () => {
        const totalGuests = guests.man + guests.woman + guests.kid

        if (totalGuests === 0) {
            Alert.alert('Número de convidados inválido', 'Por favor, insira o número de convidados.')
        } else if (selectedMeats.length === 0) {
            Alert.alert('Nenhuma carne selecionada', 'Por favor, selecione pelo menos uma carne antes de calcular.')
        } else {
            navigation.navigate('Result', { totalPrice: calculateTotalPrice() })
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleCalculatePress}>
                <Text style={styles.buttonText}>CALCULAR</Text>
            </TouchableOpacity>
        </View>
    )
}
