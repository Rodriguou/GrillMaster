import { Text, View } from 'react-native'

import Header from '../../components/Header'
import StreetAddress from '../../components/StreetAddress'
import AddressButton from '../../components/AddressButton'
import { styles } from './styles'

export default function Address() {

    return (
        <View style={styles.container}>
            <Header showMenu={false} />
            
            <StreetAddress />

            <AddressButton />
        </View>
    )
}
