import { ScrollView } from 'react-native'

import Guests from '../Guests'
import Meat from '../Meat'
import Drinks from '../Drinks'
import Consumables from '../Consumables'
import CalculateButton from '../CalculateButton'
import SideDishes from '../SideDishes'
import { styles } from './styles'

export default function Calculator() {
    return(
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Guests />

            <Meat />

            <Drinks />

            <Consumables />
            
            <SideDishes />

            <CalculateButton />
        </ScrollView>
    )
}
