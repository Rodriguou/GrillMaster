import React, { useContext } from 'react'
import { Text, TouchableOpacity, View, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { CalculatorContext } from '../../contexts/CalculatorContext'
import { styles } from './styles'

export default function CalculateButton() {
    const navigation = useNavigation()

    const { guests, selectedMeats, selectedDrinks } = useContext(CalculatorContext)

    const handleCalculatePress = () => {
        const totalGuests = guests.man + guests.woman + guests.kid

        if (!totalGuests) {
            Alert.alert('Número de convidados inválido', 'Por favor, insira o número de convidados.')
        } else if (!selectedMeats.length) {
            Alert.alert('Nenhuma carne selecionada', 'Por favor, selecione pelo menos uma carne antes de calcular.')
        } else if (!selectedDrinks.length) {
            Alert.alert('Nenhuma bebida selecionada', 'Por favor, selecione pelo menos uma bebida antes de calcular.')
        } else if (!(guests.man + guests.woman) && guests.kid) {
            Alert.alert('Convidado adulto necessário', 'Por favor, selecione pelo menos um convidado adulto antes de calcular.')
        } else {
            navigation.navigate('Address')
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
