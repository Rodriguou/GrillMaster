import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    componentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    componentTitle: {
        flex: 1,
        flexWrap: 'wrap',
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
        marginTop: 36
    },
    option: {
        backgroundColor: '#fff',
        padding: 9,
        borderWidth: 1.5,
        borderColor: '#e4e2e2',
        borderRadius: 9,
        width: 145,
        height: 165,
        justifyContent: 'space-between'
    },
    selectedOption: {
        borderColor: '#e8631a'
    },
    optionImage: {
        alignSelf: 'center'
    },
    optionText: {
        fontSize: 15,
        fontFamily: 'Archivo_600SemiBold',
    },
    optionName: {
        color: '#2a2a2a'
    },
    optionPrice: {
        color: '#898989'
    }
})
