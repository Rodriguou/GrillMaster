import React, { createContext, useState } from 'react'
import { Alert } from 'react-native'

export const AddressContext = createContext()

export default function AddressProvider({ children }) {
    const [address, setAddress] = useState({
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        nomeResponsavel: '',
        contatoResponsavel: ''
    })

    const updateAddress = (newData) => {
        setAddress(prevState => ({ ...prevState, ...newData }))
    }

    const fetchCepData = async (cep) => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

            const data = await response.json()

            if (data.erro) {
                return Alert.alert('CEP inválido', 'Por favor, digite um CEP válido.')
            }

            return data
        } catch (error) {
            return Alert.alert('Erro ao buscar o CEP')
        }
    }

    return (
        <AddressContext.Provider value={{ address, updateAddress, fetchCepData }}>
            {children}
        </AddressContext.Provider>
    )
}
