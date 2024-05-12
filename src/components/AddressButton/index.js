import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View, Alert } from 'react-native'

import { styles } from './styles'

export default function AddressButton() {
    const navigation = useNavigation()

    const handleCalculatePress = () => {
        navigation.navigate('Result')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleCalculatePress}>
                <Text style={styles.buttonText}>CONTINUAR</Text>
            </TouchableOpacity>
        </View>
    )
}
