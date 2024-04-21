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
    menu: {
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        flex: 1
    },
    selectedButton: {
        backgroundColor: '#ff6800'
    },
    unselectedButton: {
        backgroundColor: '#edebe7'
    },
    buttonText: {
        marginLeft: 6,
        fontFamily: 'Archivo_500Medium'
    },
    selectedButtonText: {
        color: '#fff'
    },
    unselectedButtonText: {
        color: '#5f5f5f'
    }
})
