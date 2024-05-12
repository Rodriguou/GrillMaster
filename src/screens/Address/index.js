import { Text, View } from 'react-native'

import Header from '../../components/Header'
import AddressButton from '../../components/AddressButton'
import { styles } from './styles'

export default function Address() {

    return (
        <View style={styles.container}>
            <Header showMenu={false} />
            
            <Text style={styles.componentTitle}>Endereço</Text>

            <AddressButton />
        </View>
    )
}
