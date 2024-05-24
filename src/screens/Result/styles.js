import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 30
    },
    content: {
        gap: 15
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
        paddingVertical: 12,
        backgroundColor: '#edebe7',
        marginVertical: 3,
        borderWidth: 0.6,
        borderColor: '#7f7f7f',
        borderRadius: 3,
        elevation: 3,
        alignItems: 'center'
    },
    resultText: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 15,
        flex: 1
    },
    keyText: {
        textAlign: 'left'
    },
    valueText: {
        textAlign: 'center'
    }
})
