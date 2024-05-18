import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

export default function SectionTitle({ title, number }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            
            <Text style={styles.number}>{number}</Text>
        </View>
    )
}
