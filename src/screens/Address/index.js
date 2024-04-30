import { Text, View } from 'react-native'

import Header from '../../components/Header'
import { styles } from './styles'

export default function Address() {

    return (
        <View style={styles.container}>
            <Header showMenu={false} />
            
            <Text style={styles.componentTitle}>Endereço</Text>
        </View>
    )
}
