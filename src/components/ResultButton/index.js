import { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { CommonActions, useNavigation } from '@react-navigation/native'

import { CalculatorContext } from '../../contexts/CalculatorContext'
import { AddressContext } from '../../contexts/AddressContext'
import { styles } from './styles'

export default function ResultButton() {
    const navigation = useNavigation()

    const { setGuests, setSelectedMeats, setSelectedDrinks, setSelectedConsumables, setSelectedSideDishes } = useContext(CalculatorContext)

    const { setAddress } = useContext(AddressContext)

    const handleCalculatePress = () => {
        setGuests({
            man: 0,
            woman: 0,
            kid: 0
        })

        setSelectedMeats([])

        setSelectedDrinks([])

        setSelectedConsumables([])

        setSelectedSideDishes([])

        setAddress({
            cep: '',
            rua: '',
            numero: '',
            bairro: '',
            cidade: '',
            nomeResponsavel: '',
            contatoResponsavel: ''
        })

        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Home' }]
            })
        )
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleCalculatePress}>
                <Text style={styles.buttonText}>CALCULAR NOVAMENTE</Text>
            </TouchableOpacity>
        </View>
    )
}
