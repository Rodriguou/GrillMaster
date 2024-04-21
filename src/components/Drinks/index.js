import { Text, View, ScrollView, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export default function Drinks() {
    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Bebidas</Text>

                <Text style={styles.headerNumber}>03</Text>
            </View>

            <ScrollView
                horizontal
                contentContainerStyle={styles.options}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity style={styles.option}>
                    {/* <ManIcon /> */}

                    <Text style={[styles.optionText, styles.optionName]}>Água</Text>

                    <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    {/* <WomanIcon /> */}

                    <Text style={[styles.optionText, styles.optionName]}>Refrigerante</Text>

                    <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    {/* <KidIcon /> */}

                    <Text style={[styles.optionText, styles.optionName]}>Cerveja</Text>

                    <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
