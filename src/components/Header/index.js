import { View, Text, TouchableOpacity } from "react-native"

import RecipesIcon from "../../../assets/recipesIcon"
import { styles } from "./styles"

export default function Header() {
    return(
        <View>
            <Text style={styles.title}>Churraskol</Text>

            <View>
                <TouchableOpacity>
                    <Text>CALCULADORA</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <RecipesIcon />

                    <Text>RECEITAS</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
