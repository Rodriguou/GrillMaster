import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 9
    },
    headerTitle: {
        fontSize: 30,
        fontFamily: 'Archivo_700Bold',
        color: '#0b0e16'
    },
    headerNumber: {
        fontSize: 27,
        fontFamily: 'Archivo_500Medium',
        color: '#e2e2e2'
    },
    option: {
        backgroundColor: '#fff',
        padding: 9,
        borderWidth: 1.5,
        borderColor: '#e4e2e2',
        borderRadius: 9
    },
    optionText: {
        fontSize: 15,
        fontFamily: 'Archivo_600SemiBold'
    },
    optionName: {
        color: '#2a2a2a'
    },
    optionPrice: {
        color: '#898989'
    }
})
