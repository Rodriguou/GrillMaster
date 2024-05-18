import React, { useContext } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native'

import ManIcon from '../../../assets/manIcon'
import WomanIcon from '../../../assets/womanIcon'
import KidIcon from '../../../assets/kidIcon'
import PlusIcon from '../../../assets/plusIcon'
import MinusIcon from '../../../assets/minusIcon'
import { styles } from './styles'
import { CalculatorContext } from '../../contexts/CalculatorContext'

export default function Guests() {
    const { guests, setGuests } = useContext(CalculatorContext)

    const incrementGuest = (type) => {
        const totalGuests = guests.man + guests.woman + guests.kid

        if (totalGuests == 50) {
            return Alert.alert('Limite de convidados excedido', 'O limite de convidados é 50.')
        }

        setGuests(prevGuests => ({
            ...prevGuests,
            [type]: prevGuests[type] + 1
        }))
    }

    const decrementGuest = (type) => {
        if (guests[type] > 0) {
            setGuests(prevGuests => ({
                ...prevGuests,
                [type]: prevGuests[type] - 1
            }))
        }
    }

    return (
        <View>
            <View style={styles.componentHeader}>
                <Text style={styles.componentTitle}>Convidados</Text>

                <Text style={styles.componentNumber}>01</Text>
            </View>

            <ScrollView
                horizontal
                contentContainerStyle={styles.options}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.option}>
                    <ManIcon />

                    <Text style={styles.optionTitle}>Homem</Text>

                    <View style={styles.optionSelection}>
                        <TouchableOpacity style={styles.optionButton} onPress={() => decrementGuest('man')}>
                            <MinusIcon />
                        </TouchableOpacity>

                        <Text style={styles.optionValue}>{guests.man}</Text>

                        <TouchableOpacity style={styles.optionButton} onPress={() => incrementGuest('man')}>
                            <PlusIcon />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.option}>
                    <WomanIcon />
                    <Text style={styles.optionTitle}>Mulher</Text>

                    <View style={styles.optionSelection}>
                        <TouchableOpacity style={styles.optionButton} onPress={() => decrementGuest('woman')}>
                            <MinusIcon />
                        </TouchableOpacity>

                        <Text style={styles.optionValue}>{guests.woman}</Text>

                        <TouchableOpacity style={styles.optionButton} onPress={() => incrementGuest('woman')}>
                            <PlusIcon />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.option}>
                    <KidIcon />

                    <Text style={styles.optionTitle}>Criança</Text>

                    <View style={styles.optionSelection}>
                        <TouchableOpacity style={styles.optionButton} onPress={() => decrementGuest('kid')}>
                            <MinusIcon />
                        </TouchableOpacity>

                        <Text style={styles.optionValue}>{guests.kid}</Text>
                        
                        <TouchableOpacity style={styles.optionButton} onPress={() => incrementGuest('kid')}>
                            <PlusIcon />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
