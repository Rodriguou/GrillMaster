import { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import MeatIcon from '../../../assets/meatIcon'
import { styles } from './styles'

export default function Meat() {
    const [selectedButton, setSelectedButton] = useState('beef')

    const handleButtonPress = (button) => {
        setSelectedButton(button)
    }

    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Carnes</Text>

                <Text style={styles.headerNumber}>02</Text>
            </View>

            <View style={styles.menu}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedButton === 'beef' ? styles.selectedButton : styles.unselectedButton
                    ]}
                    onPress={() => handleButtonPress('beef')}
                >
                    <MeatIcon selected={selectedButton === 'beef'} />

                    <Text
                        style={[
                            styles.buttonText,
                            selectedButton === 'beef' ? styles.selectedButtonText : styles.unselectedButtonText
                        ]}
                    >
                        Bovina
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedButton === 'pork' ? styles.selectedButton : styles.unselectedButton
                    ]}
                    onPress={() => handleButtonPress('pork')}
                >
                    <MeatIcon selected={selectedButton === 'pork'} />
                    
                    <Text
                        style={[
                            styles.buttonText,
                            selectedButton === 'pork' ? styles.selectedButtonText : styles.unselectedButtonText
                        ]}
                    >
                        Suína
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedButton === 'chicken' ? styles.selectedButton : styles.unselectedButton
                    ]}
                    onPress={() => handleButtonPress('chicken')}
                >
                    <MeatIcon selected={selectedButton === 'chicken'} />
                    
                    <Text
                        style={[
                            styles.buttonText,
                            selectedButton === 'chicken' ? styles.selectedButtonText : styles.unselectedButtonText
                        ]}
                    >
                        Frango
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
