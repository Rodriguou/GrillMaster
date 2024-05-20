import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    text: {
        fontFamily: 'Archivo_700Bold'
    },
    title: {
        alignSelf: 'center',
        fontSize: 39,
        color: '#ff6800',
        marginBottom: 18,
        textShadowOffset: { width: 2.4, height: 1.5 },
        textShadowColor: '#f7b818',
        textShadowRadius: 3,
        letterSpacing: 3
    },
    menu: {
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden',
        marginBottom: 15
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        flexBasis: '50%'
    },
    selectedButton: {
        backgroundColor: '#ff6800'
    },
    unselectedButton: {
        backgroundColor: '#edebe7'
    },
    buttonText: {
        marginLeft: 6
    },
    selectedButtonText: {
        color: '#fff'
    },
    unselectedButtonText: {
        color: '#5f5f5f'
    }
})
