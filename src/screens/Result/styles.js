import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 30
    },
    componentTitle: {
        fontSize: 33,
        fontFamily: 'Archivo_700Bold',
        color: '#0b0e16',
        marginBottom: 9
    },
    resultTitle: {
        fontSize: 18,
        fontFamily: 'Archivo_600SemiBold',
        color: '#ff6800',
        marginBottom: 6
    },
    resultContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 9,
        marginVertical: 3,
        borderWidth: 0.6,
        borderColor: '#0b0e16',
        borderRadius: 3
    },
    resultText: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 15
    }
})
