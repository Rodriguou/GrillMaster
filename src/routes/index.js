import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import Address from '../screens/Address'
import Result from '../screens/Result'

export default function Routes() {
    const Stack = createNativeStackNavigator()

    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Address'
                component={Address}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Result'
                component={Result}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}
