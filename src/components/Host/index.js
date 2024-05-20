import React, { useContext } from 'react'
import { View, Text, TextInput } from 'react-native'

import SectionTitle from '../SectionTitle'
import { styles } from './styles'
import { AddressContext } from '../../contexts/AddressContext'

export default function Host() {
    const { address, updateAddress } = useContext(AddressContext)

    const handleNameChange = (text) => {
        updateAddress({ nomeResponsavel: text })
    }

    const handleContactChange = (text) => {
        const formattedText = text.replace(/[^0-9]/g, '')
        updateAddress({ contatoResponsavel: formattedText })
    }

    return (
        <View style={styles.container}>
            <SectionTitle title={'Responsável'} number={'07'} />

            <View style={styles.form}>
                <Text style={styles.label}>Nome*</Text>
                <TextInput
                    style={styles.input}
                    maxLength={50}
                    cursorColor={'#0b0e16'}
                    value={address.nomeResponsavel}
                    onChangeText={handleNameChange}
                />
            </View>

            <View style={styles.form}>
                <Text style={styles.label}>Contato</Text>
                <TextInput
                    style={styles.input}
                    inputMode='numeric'
                    maxLength={11}
                    cursorColor={'#0b0e16'}
                    value={address.contatoResponsavel}
                    onChangeText={handleContactChange}
                />
            </View>
        </View>
    )
}
