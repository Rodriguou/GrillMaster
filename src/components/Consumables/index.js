import { Text, View, ScrollView, TouchableOpacity } from 'react-native'

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
                contentContainerStyle={{
                    gap: 21
                }}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity style={styles.option}>
                    {/* <ManIcon /> */}

                    <Text style={[styles.optionText, styles.optionName]}>Carvão</Text>

                    <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    {/* <WomanIcon /> */}

                    <Text style={[styles.optionText, styles.optionName]}>Sal grosso</Text>

                    <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    {/* <KidIcon /> */}

                    <Text style={[styles.optionText, styles.optionName]}>Molhos e temperos</Text>

                    <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
