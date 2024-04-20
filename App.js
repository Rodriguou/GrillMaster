import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts, Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold, Archivo_700Bold, } from '@expo-google-fonts/archivo'

import Routes from './src/routes'
import Loading from './src/components/Loading'

export default function App() {
    const [fontsLoaded] = useFonts({ Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold, Archivo_700Bold })

    return(
        <NavigationContainer>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />

            {fontsLoaded ? <Routes /> : <Loading />}
        </NavigationContainer>
    )
}
