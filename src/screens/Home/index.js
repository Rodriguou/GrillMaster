import { SafeAreaView } from 'react-native'

import { styles } from './styles'
import Header from '../../components/Header'

export default function Home() {
    return(
        <SafeAreaView style={styles.container}>
            <Header />
        </SafeAreaView>
    )
}
