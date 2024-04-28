import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'

import { styles } from './styles'

export default function Drinks() {
    return(
        <View>
            <View style={styles.componentHeader}>
                <Text style={styles.componentTitle}>Bebidas</Text>

                <Text style={styles.componentNumber}>03</Text>
            </View>

            <ScrollView
                horizontal
                contentContainerStyle={styles.options}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity style={styles.option}>
                    <Image
                        source={require('../../../assets/water.png')}
                        style={styles.optionImage}
                    />

                    <View>
                        <Text style={[styles.optionText, styles.optionName]}>Água</Text>

                        <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Image
                        source={require('../../../assets/soda.png')}
                        style={styles.optionImage}
                    />

                    <View>
                        <Text style={[styles.optionText, styles.optionName]}>Refrigerante</Text>

                        <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.option}>
                    <Image
                        source={require('../../../assets/coarseSalt.png')}
                        style={styles.optionImage}
                    />

                    <View>
                        <Text style={[styles.optionText, styles.optionName]}>Cerveja</Text>

                        <Text style={[styles.optionText, styles.optionPrice]}>R$32,90</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
