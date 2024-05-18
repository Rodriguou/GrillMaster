import React, { useContext } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'

import SectionTitle from '../SectionTitle'
import { styles } from './styles'
import { CalculatorContext } from '../../contexts/CalculatorContext'

export default function Consumables() {
    const { consumables, selectedConsumables, setSelectedConsumables } = useContext(CalculatorContext)

    const handleConsumablePress = (consumable) => {
        const index = selectedConsumables.findIndex((selectedConsumable) => selectedConsumable.name === consumable.name)

        if (index !== -1) {
            setSelectedConsumables(selectedConsumables.filter((selectedConsumable) => selectedConsumable.name !== consumable.name))
        } else {
            setSelectedConsumables([...selectedConsumables, consumable])
        }
    }

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    return (
        <View>
            <SectionTitle title={'Materiais de Consumo'} number={'04'} />

            <ScrollView
                horizontal
                contentContainerStyle={styles.options}
                showsHorizontalScrollIndicator={false}
            >
                {consumables.map((consumable, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.option,
                            selectedConsumables.some((selectedConsumable) => selectedConsumable.name === consumable.name) ? styles.selectedOption : null
                        ]}
                        onPress={() => handleConsumablePress(consumable)}
                    >
                        <Image
                            source={consumable.image}
                            style={styles.optionImage}
                        />

                        <View>
                            <Text style={[styles.optionText, styles.optionName]}>{consumable.name}</Text>

                            <Text style={[styles.optionText, styles.optionPrice]}>{formatPrice(consumable.price)}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}
