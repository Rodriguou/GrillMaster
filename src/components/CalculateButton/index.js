import React, { useContext } from 'react'
import { Text, TouchableOpacity, View, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { CalculatorContext } from '../../contexts/CalculatorContext'
import { styles } from './styles'

export default function CalculateButton() {
    const navigation = useNavigation()

    const { guests, selectedMeats, selectedDrinks } = useContext(CalculatorContext)

    const handleButtonPress = () => {
        if (!(guests.man + guests.woman)) {
            Alert.alert('Número de convidados inválido', 'Por favor, selecione pelo menos um convidado adulto.')
        } else if (!selectedMeats.length) {
            Alert.alert('Nenhuma carne selecionada', 'Por favor, selecione pelo menos uma carne antes de calcular.')
        } else if (!selectedDrinks.length) {
            Alert.alert('Nenhuma bebida selecionada', 'Por favor, selecione pelo menos uma bebida antes de calcular.')
        } else {
            navigation.navigate('Address')
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <Text style={styles.buttonText}>CONTINUAR</Text>
            </TouchableOpacity>
        </View>
    )
}
