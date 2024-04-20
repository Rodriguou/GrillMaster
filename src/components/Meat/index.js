import { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import MeatIcon from '../../../assets/meatIcon'
import { styles } from './styles'

export default function Meat() {
    const [selectedButton, setSelectedButton] = useState('bovina')

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
                        selectedButton === 'bovina' ? styles.selectedButton : styles.unselectedButton
                    ]}
                    onPress={() => handleButtonPress('bovina')}
                >
                    <MeatIcon selected={selectedButton === 'bovina'} />

                    <Text
                        style={[
                            styles.buttonText,
                            selectedButton === 'bovina' ? styles.selectedButtonText : styles.unselectedButtonText
                        ]}
                    >
                        Bovina
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedButton === 'suína' ? styles.selectedButton : styles.unselectedButton
                    ]}
                    onPress={() => handleButtonPress('suína')}
                >
                    <MeatIcon selected={selectedButton === 'suína'} />
                    
                    <Text
                        style={[
                            styles.buttonText,
                            selectedButton === 'suína' ? styles.selectedButtonText : styles.unselectedButtonText
                        ]}
                    >
                        Suína
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedButton === 'frango' ? styles.selectedButton : styles.unselectedButton
                    ]}
                    onPress={() => handleButtonPress('frango')}
                >
                    <MeatIcon selected={selectedButton === 'frango'} />
                    
                    <Text
                        style={[
                            styles.buttonText,
                            selectedButton === 'frango' ? styles.selectedButtonText : styles.unselectedButtonText
                        ]}
                    >
                        Frango
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
