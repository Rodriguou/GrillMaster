import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Result from "../pages/Result";

const Stack = createNativeStackNavigator();

export default function Routes() {
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
                name='Result'
                component={Result}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}
