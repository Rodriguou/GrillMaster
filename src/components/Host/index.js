import { View, Text, TextInput } from 'react-native'

import { styles } from './styles'

export default function Host() {

    return (
        <View style={styles.container}>
            <View style={styles.componentHeader}>
                <Text style={styles.componentTitle}>Responsável</Text>

                <Text style={styles.componentNumber}>06</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.label}>Nome</Text>

                <TextInput
                    style={styles.input}
                />
            </View>

            <View style={styles.form}>
                <Text style={styles.label}>Contato</Text>

                <TextInput
                    style={styles.input}
                    inputMode='numeric'
                    maxLength={11}
                />
            </View>
        </View>
    )
}
