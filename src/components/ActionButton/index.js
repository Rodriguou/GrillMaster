import { Text, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'

export default function ActionButton({ onPress, title }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
