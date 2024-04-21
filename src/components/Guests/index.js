import { Text, View, ScrollView, TouchableOpacity } from 'react-native'

import ManIcon from '../../../assets/manIcon'
import WomanIcon from '../../../assets/womanIcon'
import KidIcon from '../../../assets/kidIcon'
import { styles } from './styles'

export default function Guests() {
    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Convidados</Text>

                <Text style={styles.headerNumber}>01</Text>
            </View>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    gap: 21
                }}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.option}>
                    <ManIcon />

                    <Text style={styles.optionText}>Homem</Text>

                    <View style={styles.optionSelection}>
                        <TouchableOpacity style={styles.optionButton}>
                            <Text>-</Text>
                        </TouchableOpacity>

                        <Text>0</Text>

                        <TouchableOpacity style={styles.optionButton}>
                            <Text>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.option}>
                    <WomanIcon />

                    <Text style={styles.optionText}>Mulher</Text>

                    <View style={styles.optionSelection}>
                        <TouchableOpacity style={styles.optionButton}>
                            <Text>-</Text>
                        </TouchableOpacity>

                        <Text>0</Text>

                        <TouchableOpacity style={styles.optionButton}>
                            <Text>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.option}>
                    <KidIcon />

                    <Text style={styles.optionText}>Criança</Text>

                    <View style={styles.optionSelection}>
                        <TouchableOpacity style={styles.optionButton}>
                            <Text>-</Text>
                        </TouchableOpacity>

                        <Text>0</Text>

                        <TouchableOpacity style={styles.optionButton}>
                            <Text>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
