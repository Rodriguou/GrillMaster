import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    componentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
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
        gap: 9
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
    },
    button: {
        backgroundColor: '#ff6800',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 6,
        borderRadius: 6,
        alignSelf: 'flex-start'
    },
    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff'
    }
})