import { Text, View } from 'react-native'

import Header from '../../components/Header'
import { styles } from './styles'

export default function Result({ route }) {
    // const { totalPrice } = route.params

    return (
        <View style={styles.container}>
            <Header showMenu={false} />
            
            <Text style={styles.componentTitle}>RESULTADO</Text>

            {/* <Text>Total Price: {totalPrice}</Text> */}
            <Text>Consumo Individual de Carnes</Text>

            <View>
                <Text>"o nome da carne deve aparecer aqui"</Text>

                <Text>"o valor deve aparecer aqui de acordo com o cálculo"</Text>
            </View>
        </View>
    )
}
