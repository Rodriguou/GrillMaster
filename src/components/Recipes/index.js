import React from 'react';
import { styles } from './styles'
import { ScrollView, View, Text } from 'react-native';
import RecipeItem from './RecipeComp'; 
import recipesData from '../../Recipes.json'; 

export default function Recipes() {
  const { porkRecipes, beefRecipes, chickenRecipes } = recipesData;

  return (
    <View  style={styles.container}>
        <Text>Confira nessa seção sugestões de receitas com os cortes de carne da calculadora.</Text>
        <ScrollView style={styles.recipeContainer}>

            <Text style={styles.categoryText}>Carne Bovina</Text>
            {beefRecipes.map((recipe, index) => (
                <RecipeItem key={index} name={recipe.name} ingredients={recipe.ingredients} preparation={recipe.preparation} />
            ))}

            <Text style={[styles.categoryText, {marginTop: '10%'}]}>Carne Suína</Text>
            {porkRecipes.map((recipe, index) => (
                <RecipeItem key={index} name={recipe.name} ingredients={recipe.ingredients} preparation={recipe.preparation} />
            ))}

            <Text style={[styles.categoryText, {marginTop: '10%'}]}>Frango</Text>
            {chickenRecipes.map((recipe, index) => (
                <RecipeItem key={index} name={recipe.name} ingredients={recipe.ingredients} preparation={recipe.preparation} />
            ))}
        </ScrollView>
    </View>
  );
};