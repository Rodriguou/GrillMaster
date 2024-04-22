import { useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'

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

            {selectedButton === 'beef' && (
                <ScrollView
                    horizontal
                    contentContainerStyle={styles.options}
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity style={styles.option}>
                        <Image
                            source={require('../../../assets/coal.png')}
                            style={styles.optionImage}
                        />

                        <View>
                            <Text style={[styles.optionText, styles.optionName]}>Picanha</Text>

                            <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.option}>
                        <Image
                            source={require('../../../assets/coarseSalt.png')}
                            style={styles.optionImage}
                        />

                        <View>
                            <Text style={[styles.optionText, styles.optionName]}>Costela</Text>

                            <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.option}>
                        <Image
                            source={require('../../../assets/coarseSalt.png')}
                            style={styles.optionImage}
                        />

                        <View>
                            <Text style={[styles.optionText, styles.optionName]}>Maminha</Text>

                            <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            )}

            {selectedButton === 'pork' && (
                <ScrollView
                    horizontal
                    contentContainerStyle={styles.options}
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity style={styles.option}>
                        <Image
                            source={require('../../../assets/coal.png')}
                            style={styles.optionImage}
                        />

                        <View>
                            <Text style={[styles.optionText, styles.optionName]}>Lombinho</Text>

                            <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.option}>
                        <Image
                            source={require('../../../assets/coarseSalt.png')}
                            style={styles.optionImage}
                        />

                        <View>
                            <Text style={[styles.optionText, styles.optionName]}>Pernil</Text>

                            <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.option}>
                        <Image
                            source={require('../../../assets/coarseSalt.png')}
                            style={styles.optionImage}
                        />

                        <View>
                            <Text style={[styles.optionText, styles.optionName]}>Paleta</Text>

                            <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            )}

            {selectedButton === 'chicken' && (
                <ScrollView
                    horizontal
                    contentContainerStyle={styles.options}
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity style={styles.option}>
                        <Image
                            source={require('../../../assets/coal.png')}
                            style={styles.optionImage}
                        />

                        <View>
                            <Text style={[styles.optionText, styles.optionName]}>Coxa</Text>

                            <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.option}>
                        <Image
                            source={require('../../../assets/coarseSalt.png')}
                            style={styles.optionImage}
                        />

                        <View>
                            <Text style={[styles.optionText, styles.optionName]}>Asa</Text>

                            <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.option}>
                        <Image
                            source={require('../../../assets/coarseSalt.png')}
                            style={styles.optionImage}
                        />

                        <View>
                            <Text style={[styles.optionText, styles.optionName]}>Coração</Text>

                            <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            )}
        </View>
    )
}
