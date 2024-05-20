import { SafeAreaView, ScrollView, View } from 'react-native'

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
                contentContainerStyle={styles.containerContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.forms}>
                    <StreetAddress />

                    <Host />
                </View>

                <AddressButton />
            </ScrollView>
        </SafeAreaView>
    )
}
