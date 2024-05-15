import { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export default function StreetAddress() {
    const [cep, setCep] = useState('')

    const handleNumericInputChange = (text, setInputState) => {
        const newText = text.replace(/[^0-9]/g, '')

        setInputState(newText)
    }

    return (
        <View>
            <View style={styles.componentHeader}>
                <Text style={styles.componentTitle}>Endereço</Text>

                <Text style={styles.componentNumber}>05</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.label}>CEP</Text>

                <TextInput
                    style={styles.input}
                    maxLength={8}
                    inputMode='numeric'
                    onChangeText={(text) => handleNumericInputChange(text, setCep)}
                    value={cep}
                    placeholder='00000-000'
                    placeholderTextColor={'#7f7f7f'}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>BUSCAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
