import { ScrollView } from 'react-native'

import Guests from '../Guests'
import Meat from '../Meat'
import Drinks from '../Drinks'
import { styles } from './styles'

export default function Calculator() {
    return(
        <ScrollView>
            <Guests />

            <Meat />

            <Drinks />
        </ScrollView>
    )
}
