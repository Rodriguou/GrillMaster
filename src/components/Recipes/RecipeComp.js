import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './recipeCompStyle'

const RecipeItem = ({ name, ingredients, preparation }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        <Text
          style={[
            styles.name,
            isOpen
              ? { borderBottomColor: "#E86E1A", borderBottomWidth: 1 }
              : null,
          ]}
        >
          {name}
        </Text>
      </TouchableOpacity>
      {isOpen && (
        <View>
          <Text style={styles.sectionTitle}>Ingredientes:</Text>
          {ingredients.map((ingredient, index) => (
            <Text style={styles.sectionText} key={index}>{`${index + 1} - ${ingredient}`}</Text>
          ))}

          <Text style={[styles.sectionTitle, { marginTop: "5%" }]}> Modo de Preparo:</Text>
          {preparation.map((preparation, index) => (
            <Text style={styles.sectionText} key={index}>{`${index + 1} - ${preparation}`}</Text>
          ))}
        </View>
      )}
    </View>
  )
}

export default RecipeItem
