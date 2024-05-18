import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
    options: {
        gap: 21,
        marginTop: 9
    },
    option: {
        backgroundColor: '#fff',
        padding: 9,
        borderWidth: 1.5,
        borderColor: '#e4e2e2',
        borderRadius: 9,
        gap: 6,
        alignItems: 'center'
    },
    optionTitle: {
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 21,
    },
    optionSelection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 111
    },
    optionButton: {
        paddingHorizontal: 18,
        paddingVertical: 9,
        // backgroundColor: '#ff0'
    },
    optionValue: {
        fontFamily: 'Archivo_600SemiBold',
        color: '#2a2a2a'
    }
})
