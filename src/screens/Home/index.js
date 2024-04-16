import { SafeAreaView, View } from 'react-native'
import { useState } from 'react'

import { styles } from './styles'
import Header from '../../components/Header'
import Calculator from '../../components/Calculator'
import Recipes from '../../components/Recipes'

export default function Home() {
    const [selectedButton, setSelectedButton] = useState('calculator')

    const handleButtonPress = (button) => {
        setSelectedButton(button)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header selectedButton={selectedButton} onPress={handleButtonPress} />

            <View>
                {selectedButton === 'calculator' && <Calculator />}
                
                {selectedButton === 'recipes' && <Recipes />}
            </View>
        </SafeAreaView>
    )
}
