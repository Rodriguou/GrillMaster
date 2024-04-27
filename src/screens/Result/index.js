import { Text, View } from 'react-native'

import Header from '../../components/Header'
import { styles } from './styles'

export default function Result() {
    return(
        <View style={styles.container}>
            <Header showMenu={false} />
        </View>
    )
}
