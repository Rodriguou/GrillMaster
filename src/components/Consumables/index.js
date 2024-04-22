import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'

import { styles } from './styles'

export default function Consumables() {
    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Materiais de Consumo</Text>

                <Text style={styles.headerNumber}>04</Text>
            </View>

            <ScrollView
                horizontal
                contentContainerStyle={styles.options}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity style={styles.option}>
                    <Image
                        source={require('../../../assets/coal.png')}
                        style={styles.optionImage}
                    />

                    <View>
                        <Text style={[styles.optionText, styles.optionName]}>Carvão</Text>

                        <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Image
                        source={require('../../../assets/coarseSalt.png')}
                        style={styles.optionImage}
                    />

                    <View>
                        <Text style={[styles.optionText, styles.optionName]}>Sal grosso</Text>

                        <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Image
                        source={require('../../../assets/coarseSalt.png')}
                        style={styles.optionImage}
                    />

                    <View>
                        <Text style={[styles.optionText, styles.optionName]}>Molhos e temperos</Text>

                        <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
