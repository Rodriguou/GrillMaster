import React, { useContext } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'

import SectionTitle from '../SectionTitle'
import { styles } from './styles'
import { CalculatorContext } from '../../contexts/CalculatorContext'

export default function sideDishes() {
    const { sideDishes, selectedSideDishes, setSelectedSideDishes } = useContext(CalculatorContext)

    const handleSideDishPress = (sideDish) => {
        const index = selectedSideDishes.findIndex((selectedSideDish) => selectedSideDish.name === sideDish.name)

        if (index !== -1) {
            setSelectedSideDishes(selectedSideDishes.filter((selectedSideDish) => selectedSideDish.name !== sideDish.name))
        } else {
            setSelectedSideDishes([...selectedSideDishes, sideDish])
        }
    }

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    return (
        <View>
            <SectionTitle title={'Acompanha-\nmentos'} number={'05'} />

            <ScrollView
                horizontal
                contentContainerStyle={styles.options}
                showsHorizontalScrollIndicator={false}
            >
                {sideDishes.map((sideDish, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.option,
                            selectedSideDishes.some((selectedSideDish) => selectedSideDish.name === sideDish.name) ? styles.selectedOption : null
                        ]}
                        onPress={() => handleSideDishPress(sideDish)}
                    >
                        <Image
                            source={sideDish.image}
                            style={styles.optionImage}
                        />

                        <View>
                            <Text style={[styles.optionText, styles.optionName]}>{sideDish.name}</Text>

                            <Text style={[styles.optionText, styles.optionPrice]}>{formatPrice(sideDish.price)}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}
