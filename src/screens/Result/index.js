import React, { useContext } from 'react';
import { Text, ScrollView, View } from 'react-native';

import Header from '../../components/Header';
import ResultButton from '../../components/ResultButton';
import { CalculatorContext } from '../../contexts/CalculatorContext';
import { styles } from './styles';

export default function Result() {
    const { selectedMeats, selectedDrinks, totalMeatKg, totalDrinkVolume, totalKgPerMeat, volumePerDrink, individualPrice, totalMeatPrice } = useContext(CalculatorContext);

    const formatKg = (number) => {
        return number.toLocaleString('pt-BR', { maximumFractionDigits: 2 }) + ' kg';
    };

    const formatLiters = (volume) => {
        if (volume >= 1000) {
            return (volume / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + ' l';
        } else {
            return volume.toLocaleString('pt-BR') + ' ml';
        }
    };
    
    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const guestTypeMapping = {
        man: 'Homem',
        woman: 'Mulher',
        kid: 'Criança'
    };

    return (
        <View style={styles.container}>
            <Header showMenu={false} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.resultTitle}>Consumo de Carnes</Text>

                {selectedMeats.map((meat, index) => (
                    <View
                        style={styles.resultContent}
                        key={index}
                    >
                        <Text style={styles.resultText}>{meat.name}</Text>
                        <Text style={styles.resultText}>{formatKg(totalKgPerMeat)}</Text>
                    </View>
                ))}

                <View
                    style={styles.resultContent}
                >
                    <Text style={styles.resultText}>Total</Text>
                    <Text style={styles.resultText}>{formatKg(totalMeatKg)}</Text>
                </View>

                <Text style={styles.resultTitle}>Consumo de Bebidas</Text>

                {selectedDrinks.map((drink, index) => (
                    <View
                        style={styles.resultContent}
                        key={index}
                    >
                        <Text style={styles.resultText}>{drink.name}</Text>
                        <Text style={styles.resultText}>{formatLiters(volumePerDrink[drink.name])}</Text>
                    </View>
                ))}

                <View
                    style={styles.resultContent}
                >
                    <Text style={styles.resultText}>Total</Text>
                    <Text style={styles.resultText}>{formatLiters(totalDrinkVolume)}</Text>
                </View>

                <Text style={styles.resultTitle}>Valor de Rateio por Convidado</Text>

                {Object.keys(individualPrice).map((type, index) => (
                    <View
                        style={styles.resultContent}
                        key={index}
                    >
                        <Text style={styles.resultText}>{guestTypeMapping[type]}</Text>
                        <Text style={styles.resultText}>{formatPrice(individualPrice[type])}</Text>
                    </View>
                ))}

                <Text style={styles.resultTitle}>Valor das Carnes</Text>

                <View style={styles.resultContent}>
                    <Text style={styles.resultText}>Total</Text>

                    <Text style={styles.resultText}>{formatPrice(totalMeatPrice)}</Text>
                </View>

                <ResultButton />
            </ScrollView>
        </View>
    );
}
