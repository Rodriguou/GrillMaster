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
