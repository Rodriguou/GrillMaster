import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        gap: 9
    },
    componentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    componentTitle: {
        fontSize: 30,
        fontFamily: 'Archivo_700Bold',
        color: '#0b0e16'
    },
    componentNumber: {
        fontSize: 27,
        fontFamily: 'Archivo_500Medium',
        color: '#e2e2e2'
    },
    form: {
        gap: 9,
        justifyContent: 'space-between'
    },
    label: {
        color: '#0b0e16',
        fontFamily: 'Archivo_400Regular'
    },
    input: {
        borderWidth: 0.9,
        borderColor: '#e4e2e2',
        borderRadius: 3,
        paddingLeft: 9,
        fontFamily: 'Archivo_400Regular'
    }
})
