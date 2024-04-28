import React, { useState, useContext } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import MeatIcon from '../../../assets/meatIcon'

import { styles } from './styles'
import { CalculatorContext } from '../../contexts/CalculatorContext'

export default function Meat() {
    const { meats, selectedMeats, setSelectedMeats } = useContext(CalculatorContext)

    const [selectedType, setSelectedType] = useState('beef')

    const handleTypePress = (type) => {
        setSelectedType(type)
    }

    const handleMeatPress = (meat) => {
        const index = selectedMeats.findIndex((selectedMeat) => selectedMeat.name === meat.name)

        if (index !== -1) {
            setSelectedMeats(selectedMeats.filter((selectedMeat) => selectedMeat.name !== meat.name))
        } else {
            setSelectedMeats([...selectedMeats, meat])
        }
    }

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    return (
        <View>
            <View style={styles.componentHeader}>
                <Text style={styles.componentTitle}>Carnes</Text>
                
                <Text style={styles.componentNumber}>02</Text>
            </View>

            <View style={styles.menu}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedType === 'beef' ? styles.selectedButton : styles.unselectedButton
                    ]}
                    onPress={() => handleTypePress('beef')}
                >
                    <MeatIcon selected={selectedType === 'beef'} />

                    <Text style={[styles.buttonText, selectedType === 'beef' ? styles.selectedButtonText : styles.unselectedButtonText]}>Bovina</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedType === 'pork' ? styles.selectedButton : styles.unselectedButton
                    ]}
                    onPress={() => handleTypePress('pork')}
                >
                    <MeatIcon selected={selectedType === 'pork'} />

                    <Text style={[styles.buttonText, selectedType === 'pork' ? styles.selectedButtonText : styles.unselectedButtonText]}>Suína</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedType === 'chicken' ? styles.selectedButton : styles.unselectedButton
                    ]}
                    onPress={() => handleTypePress('chicken')}
                >
                    <MeatIcon selected={selectedType === 'chicken'} />

                    <Text style={[styles.buttonText, selectedType === 'chicken' ? styles.selectedButtonText : styles.unselectedButtonText]}>Frango</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                contentContainerStyle={styles.options}
                showsHorizontalScrollIndicator={false}
            >
                {meats
                    .filter((meat) => meat.type === selectedType)
                    .map((meat, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.option,
                                selectedMeats.some((selectedMeat) => selectedMeat.name === meat.name) ? styles.selectedOption : null
                            ]}
                            onPress={() => handleMeatPress(meat)}
                        >
                            <Image
                                source={meat.image}
                                style={styles.optionImage}
                            />

                            <View>
                                <Text style={[styles.optionText, styles.optionName]}>{meat.name}</Text>

                                <Text style={[styles.optionText, styles.optionPrice]}>{formatPrice(meat.price)}/kg</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
            </ScrollView>
        </View>
    )
}
