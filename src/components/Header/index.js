import { View, Text, TouchableOpacity } from 'react-native'

import CalculatorIcon from '../../../assets/calculatorIcon'
import RecipesIcon from '../../../assets/recipesIcon'
import { styles } from './styles'

export default function Header({ selectedButton, onPress, showMenu }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>Churraskol</Text>

            {showMenu && (
                <View style={styles.menu}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            selectedButton === 'calculator' ? styles.selectedButton : styles.unselectedButton
                        ]}
                        onPress={() => onPress('calculator')}
                    >
                        <CalculatorIcon selected={selectedButton === 'calculator'} />
                        <Text
                            style={[
                                styles.text,
                                styles.buttonText,
                                selectedButton === 'calculator' ? styles.selectedButtonText : styles.unselectedButtonText
                            ]}
                        >
                            CALCULADORA
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.button,
                            selectedButton === 'recipes' ? styles.selectedButton : styles.unselectedButton
                        ]}
                        onPress={() => onPress('recipes')}
                    >
                        <RecipesIcon selected={selectedButton === 'recipes'} />
                        <Text
                            style={[
                                styles.text,
                                styles.buttonText,
                                selectedButton === 'recipes' ? styles.selectedButtonText : styles.unselectedButtonText
                            ]}
                        >
                            RECEITAS
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}
