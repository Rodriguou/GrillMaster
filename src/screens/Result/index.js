import React, {useContext} from 'react'
import { Text, ScrollView, View } from 'react-native'

import Header from '../../components/Header'
import { CalculatorContext } from '../../contexts/CalculatorContext'
import { styles } from './styles'

export default function Result() {
    const { selectedMeats, selectedDrinks, totalMeatKg, totalDrinkVolume, totalKgPerMeat, volumePerDrink, individualPrice } = useContext(CalculatorContext)

    const formatKg = (number) => {
        return number.toLocaleString('pt-BR', { maximumFractionDigits: 2 }) + ' kg'
    }

    const formatLiters = (volume) => {
        if (volume >= 1000) {
            return (volume / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + ' l'
        } else {
            return volume.toLocaleString('pt-BR') + ' ml'
        }
    }
    
    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    return (
        <View style={styles.container}>
            <Header showMenu={false} />
            
            <Text style={styles.componentTitle}>RESULTADO</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.resultTitle}>Consumo Individual de Carnes</Text>

                {selectedMeats.map((meat, index) => (
                    <View
                        style={styles.resultContent}
                        key={index}
                    >
                        <Text style={styles.resultText}>{meat.name}</Text>

                        <Text style={styles.resultText}>{formatKg(totalKgPerMeat)}</Text>
                    </View>
                ))}

                <Text style={styles.resultTitle}>Consumo Total de Carnes</Text>
                
                <View
                    style={styles.resultContent}
                >
                    <Text style={styles.resultText}>Total</Text>

                    <Text style={styles.resultText}>{formatKg(totalMeatKg)}</Text>
                </View>


                <Text style={styles.resultTitle}>Consumo Individual de Bebidas</Text>

                {selectedDrinks.map((drink, index) => (
                    <View
                        style={styles.resultContent}
                        key={index}
                    >
                        <Text style={styles.resultText}>{drink.name}</Text>

                        <Text style={styles.resultText}>{formatLiters(volumePerDrink[drink.name])}</Text>
                    </View>
                ))}

                <Text style={styles.resultTitle}>Consumo Total de Bebidas</Text>

                <View
                    style={styles.resultContent}
                >
                    <Text style={styles.resultText}>Total</Text>

                    <Text style={styles.resultText}>{formatLiters(totalDrinkVolume)}</Text>
                </View>

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
            </ScrollView>
        </View>
    )
}
