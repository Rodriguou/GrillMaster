import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts, Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold, Archivo_700Bold } from '@expo-google-fonts/archivo'

import Routes from './src/routes'
import Loading from './src/components/Loading'
import CalculatorProvider from './src/contexts/CalculatorContext'
import AddressProvider from './src/contexts/AddressContext'

export default function App() {
    const [fontsLoaded] = useFonts({ Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold, Archivo_700Bold })

    return (
        <NavigationContainer>
            <CalculatorProvider>
                <AddressProvider>
                    <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />

                    {fontsLoaded ? <Routes /> : <Loading />}
                </AddressProvider>
            </CalculatorProvider>
        </NavigationContainer>
    )
}
