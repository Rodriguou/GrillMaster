import { useContext } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ActionButton from '../ActionButton'
import { CalculatorContext } from '../../contexts/CalculatorContext'

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

    return <ActionButton onPress={handleButtonPress} title="CONTINUAR" />
}
