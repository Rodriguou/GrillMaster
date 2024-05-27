import { useContext } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ActionButton from '../ActionButton'
import { AddressContext } from '../../contexts/AddressContext'

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

    const handleButtonPress = () => {
        if (!isAddressValid()) {
            Alert.alert('Endereço obrigatório', 'Por favor, preencha todos os campos do endereço.')
        } else if (!address.nomeResponsavel) {
            Alert.alert('Nome obrigatório', 'Por favor, preencha o campo do nome.')
        } else if (!isValidName(address.nomeResponsavel)) {
            Alert.alert('Nome inválido', 'O nome do deve ter no mínimo 3 caracteres e conter apenas letras.')
        } else if (address.contatoResponsavel && !isValidContact(address.contatoResponsavel)) {
            Alert.alert('Contato inválido', 'O número de contato deve ter 10 ou 11 dígitos.')
        } else {
            navigation.navigate('Result')
        }
    }

    return <ActionButton onPress={handleButtonPress} title="CONTINUAR" />
}
