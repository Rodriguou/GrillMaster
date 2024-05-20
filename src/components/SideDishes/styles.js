import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
