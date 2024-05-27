import { useState } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'

import SectionTitle from '../SectionTitle'
import { styles } from './styles'

export default function ItemList({ title, number, items, selectedItems, setSelectedItems, formatVolume, types }) {
    const [selectedType, setSelectedType] = useState(types ? types[0].value : null)

    const handleTypePress = (type) => {
        setSelectedType(type)
    }

    const handleItemPress = (item) => {
        const index = selectedItems.findIndex((selectedItem) => selectedItem.name === item.name)

        if (index !== -1) {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem.name !== item.name))
        } else {
            setSelectedItems([...selectedItems, item])
        }
    }

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    return (
        <View>
            <SectionTitle title={title} number={number} />

            {types && (
                <View style={styles.menu}>
                    {types.map((type) => (
                        <TouchableOpacity
                            key={type.value}
                            style={[
                                styles.button,
                                selectedType === type.value ? styles.selectedButton : styles.unselectedButton
                            ]}
                            onPress={() => handleTypePress(type.value)}
                        >
                            <type.icon selected={selectedType === type.value} />

                            <Text style={[
                                styles.buttonText,
                                selectedType === type.value ? styles.selectedButtonText : styles.unselectedButtonText
                            ]}>
                                {type.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}

            <ScrollView
                horizontal
                contentContainerStyle={styles.options}
                showsHorizontalScrollIndicator={false}
            >
                {items
                    .filter((item) => !selectedType || item.type === selectedType)
                    .map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.option,
                                selectedItems.some((selectedItem) => selectedItem.name === item.name) ? styles.selectedOption : null
                            ]}
                            onPress={() => handleItemPress(item)}
                        >
                            <Image
                                source={item.image}
                                style={styles.optionImage}
                            />

                            <View>
                                <Text style={[styles.optionText, styles.optionName]}>{item.name}</Text>

                                <Text style={[styles.optionText, styles.optionPrice]}>
                                    {formatPrice(item.price)}

                                    {formatVolume && ` (${formatVolume(item.volume)})`}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
            </ScrollView>
        </View>
    )
}
