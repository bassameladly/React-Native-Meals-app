import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from './CategoriesScreen'
import CategoryMealsScreen from './CategoryMealsScreen'
import MealDetailScreen from './MealDetailScreen'


const MealsNavigator = createStackNavigator({
  Categries: CategoriesScreen,
  Deatails: MealDetailScreen

 
})

export default  createAppContainer(MealsNavigator);