import { SafeAreaView, ScrollView } from 'react-native'

import Header from '../../components/Header'
import StreetAddress from '../../components/StreetAddress'
import Host from '../../components/Host'
import AddressButton from '../../components/AddressButton'
import { styles } from './styles'

export default function Address() {

    return (
        <SafeAreaView
            style={styles.container}
        >
            <Header showMenu={false} />
            
            <ScrollView
                contentContainerStyle={styles.forms}
                showsVerticalScrollIndicator={false}
            >
                <StreetAddress />

                <Host />

                <AddressButton />
            </ScrollView>
        </SafeAreaView>
    )
}
