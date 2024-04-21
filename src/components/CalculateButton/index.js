import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'

export default function CalculateButton() {
    const navigation = useNavigation()
    
    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Result')}
            >
                <Text style={styles.buttonText}>CALCULAR</Text>
            </TouchableOpacity>
        </View>
    )
}
