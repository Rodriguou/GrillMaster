import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View, Alert } from 'react-native'

import { AddressContext } from '../../contexts/AddressContext'
import { styles } from './styles'

export default function AddressButton() {
    const navigation = useNavigation()
    const { address } = useContext(AddressContext)

    const isAddressValid = () => {
        const requiredFields = ['rua', 'bairro', 'cidade', 'numero']
        return requiredFields.every(field => address[field] && address[field].trim() !== '')
    }

    const isValidName = (name) => {
        const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/
        return nameRegex.test(name) && name.length >= 3
    }

    const isValidContact = (contact) => {
        const contactRegex = /^[0-9]{10,11}$/
        return contactRegex.test(contact)
    }

    const handleCalculatePress = () => {
        if (!isAddressValid()) {
            Alert.alert('Endereço obrigatório', 'Por favor, preencha todos os campos obrigatórios do endereço.')
        } else if (!isValidName(address.nomeResponsavel)) {
            Alert.alert('Nome inválido', 'O nome do responsável deve ter no mínimo 3 caracteres e conter apenas letras.')
        } else if (address.contatoResponsavel && !isValidContact(address.contatoResponsavel)) {
            Alert.alert('Contato inválido', 'O número de contato deve ter 10 ou 11 dígitos.')
        } else {
            navigation.navigate('Result')
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
