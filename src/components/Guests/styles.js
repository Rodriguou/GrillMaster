import { StyleSheet } from "react-native";

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
        borderRadius: 9,
        gap: 6,
        alignItems: 'center'
    },
    optionText: {
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 21,
    },
    optionSelection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 9,
    },
    optionButton: {
        paddingHorizontal: 18,
        paddingVertical: 9,
    }
})