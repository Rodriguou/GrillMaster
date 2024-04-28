import React, { useContext } from 'react'
import { Text, TouchableOpacity, View, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { CalculatorContext } from '../../contexts/CalculatorContext'
import { styles } from './styles'

export default function CalculateButton() {
    const navigation = useNavigation()
    
    const { guests, selectedMeats } = useContext(CalculatorContext)

    const calculateTotalPrice = () => {
        // Inicializar o preço total como zero
        let totalPrice = 0
    
        // Calcular a quantidade de carne por homem para cada tipo de carne
        const meatPerMan = 600 / selectedMeats.length
    
        // Calcular o preço total para cada tipo de carne
        selectedMeats.forEach((meat) => {
            // Calcular o preço total para cada tipo de carne
            let meatPrice = 0
    
            // Calcular a quantidade de carne para este tipo
            const meatQuantity = meatPerMan * guests.man
    
            // Calcular o preço total considerando a quantidade de carne
            meatPrice = meat.price * (meatQuantity / 1000) // Convertendo para kg
    
            // Adicionar o preço da carne ao preço total
            totalPrice += meatPrice
        })
    
        totalPrice = totalPrice.toFixed(2)
    
        return totalPrice
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
