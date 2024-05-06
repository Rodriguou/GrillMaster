import React, { useContext } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'

import { styles } from './styles'
import { CalculatorContext } from '../../contexts/CalculatorContext'

export default function Drinks() {
    const { drinks, selectedDrinks, setSelectedDrinks } = useContext(CalculatorContext)

    const handleDrinkPress = (drink) => {
        const index = selectedDrinks.findIndex((selectedDrink) => selectedDrink.name === drink.name)

        if (index !== -1) {
            setSelectedDrinks(selectedDrinks.filter((selectedDrink) => selectedDrink.name !== drink.name))
        } else {
            setSelectedDrinks([...selectedDrinks, drink])
        }
    }

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }
    
    const formatLiters = (volume) => {
        if (volume >= 1000) {
            return (volume / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + ' l'
        }
        else {
            return volume.toLocaleString('pt-BR') + ' ml'
        }
    }

    return (
        <View>
            <View style={styles.componentHeader}>
                <Text style={styles.componentTitle}>Bebidas</Text>
                
                <Text style={styles.componentNumber}>03</Text>
            </View>

            <ScrollView
                horizontal
                contentContainerStyle={styles.options}
                showsHorizontalScrollIndicator={false}
            >
                {drinks.map((drink, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.option,
                            selectedDrinks.some((selectedDrink) => selectedDrink.name === drink.name) ? styles.selectedOption : null
                        ]}
                        onPress={() => handleDrinkPress(drink)}
                    >
                        <Image
                            source={drink.image}
                            style={styles.optionImage}
                        />

                        <View>
                            <Text style={[styles.optionText, styles.optionName]}>{drink.name}</Text>

                            <Text style={[styles.optionText, styles.optionPrice]}>{`${formatPrice(drink.price)} (${formatLiters(drink.volume)})`}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}
