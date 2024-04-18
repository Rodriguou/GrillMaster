import { useState } from 'react'
import { SafeAreaView, View } from 'react-native'

import Header from '../../components/Header'
import Calculator from '../../components/Calculator'
import Recipes from '../../components/Recipes'
import { styles } from './styles'

export default function Home() {
    const [selectedButton, setSelectedButton] = useState('calculator')

    const handleButtonPress = (button) => {
        setSelectedButton(button)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header selectedButton={selectedButton} onPress={handleButtonPress} />

            <View>
                {selectedButton === 'calculator' ? <Calculator /> : <Recipes />}
            </View>
        </SafeAreaView>
    )
}
