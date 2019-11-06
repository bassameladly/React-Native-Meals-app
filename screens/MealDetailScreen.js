import React, { useEffect, useCallback } from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { HeaderButtons , Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import { toggleFavorite} from '../store/actions/meals'
import  Icon from 'react-native-vector-icons/Ionicons'


const ListItem = props => {
    return( 
        <View style={styles.listItem}>
            <Text>{props.children}</Text>
        </View>
    )
}

const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals)
    const currentMealsFavorite = useSelector(state => 
        state.meals.favoritesMeals.some(meal => meal.id === mealId))
    const mealId =  props.navigation.getParam('mealId')
    const selectedMeal = availableMeals.find(meal => meal.id === mealId)

   const dispatch = useDispatch()

   const toggleFavoriteHandler = useCallback(() => {
       dispatch(toggleFavorite(mealId))
   }, [dispatch, mealId])

   useEffect(() => {
       props.navigation.setParams({ toggleFav: toggleFavoriteHandler })
   }, [toggleFavoriteHandler]) 
    useEffect (() => {
        props.navigation.setParams({ isFav: currentMealsFavorite})
    }, [currentMealsFavorite])

    return(
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl }} style={styles.image}/> 
            <View style={styles.details}>
            <Text>Duration is {selectedMeal.duration} Min</Text>
            <Text>{selectedMeal.complexity.toUpperCase()}</Text>
            <Text>{selectedMeal.affordability.toUpperCase()}</Text>
        </View>
        <Text style={styles.title}>Ingrediance</Text>
        {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}

        </ScrollView>
    )
}
MealDetailScreen.navigationOptions = (navigationData) =>{
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const isFavorite = navigationData.navigation.getParam('isFav')

return{
    headerTitle: mealTitle,
    headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item 
        title='Favorite'  
        iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
        onPress={toggleFavorite} />
    </HeaderButtons>
}
}

const styles = StyleSheet.create({
     image: {
         width: '100%',
         height: 200
     },
     details: {
         flexDirection: 'row',
         justifyContent: 'space-around',
         padding: 15
     },
     title: {
         fontWeight: 'bold',
         fontSize: 22,
         textAlign: 'center'
     },
     listItem: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
     }
})
export default  MealDetailScreen