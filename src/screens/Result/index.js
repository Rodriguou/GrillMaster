import React from 'react'
import { Text, View } from 'react-native'

import Header from '../../components/Header'
import { styles } from './styles'

export default function Result({ route }) {
    const { selectedMeats, selectedDrinks, totalKgPerMeat, totalVolumePerDrink, individualPrice } = route.params

    const formatKg = (number) => {
        return number.toLocaleString('pt-BR', { maximumFractionDigits: 2 })
    }

    const formatLiters = (volume) => {
        return volume.toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + ' l'
    }
    
    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    return (
        <View style={styles.container}>
            <Header showMenu={false} />
            
            <Text style={styles.componentTitle}>RESULTADO</Text>

            <Text style={styles.resultTitle}>Consumo Individual de Carnes</Text>

            {selectedMeats.map((meat, index) => (
                <View
                    style={styles.resultContent}
                    key={index}
                >
                    <Text style={styles.resultText}>{meat.name}</Text>

                    <Text style={styles.resultText}>{formatKg(totalKgPerMeat)} kg</Text>
                </View>
            ))}

            <Text style={styles.resultTitle}>Consumo Individual de Bebidas</Text>

            {selectedDrinks.map((drink, index) => (
                <View
                    style={styles.resultContent}
                    key={index}
                >
                    <Text style={styles.resultText}>{drink.name}</Text>

                    <Text style={styles.resultText}>{formatLiters(totalVolumePerDrink[drink.name])}</Text>
                </View>
            ))}

            <Text style={styles.resultTitle}>Valor Total de Rateio por Tipo de Convidado</Text>

            {Object.keys(individualPrice).map((type, index) => (
                <View
                    style={styles.resultContent}
                    key={index}
                >
                    <Text style={styles.resultText}>{type}</Text>

                    <Text style={styles.resultText}>{formatPrice(individualPrice[type])}</Text>
                </View>
            ))}
        </View>
    )
}
