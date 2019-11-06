import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import  Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'
import { Platform } from 'react-native'
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

import CategoriesScreen from './CategoriesScreen'
import CategoryMealScreen from './CategoryMealsScreen'
import MealDetailScreen from './MealDetailScreen'
import FavoritesScreen from './FavoritesScreen'
import FiltersScreen from './FiltersScreen'
import Colors from '../Constants/Colors'

const defaultStackNavigatorOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor:
      Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
  }


const RootNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryMeals: {
      screen: CategoryMealScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
      defaultNavigationOptions: defaultStackNavigatorOptions
  }
);
const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: defaultStackNavigatorOptions

}
)

const tabScreenConfig = {
  Meals: {screen: RootNavigator , navigationOptions: {
  tabBarIcon: tabInfo => {
    return <Icon size={25} color={tabInfo.tintColor} name="ios-restaurant" /> 
  }
}},
Favorites: { screen: FavNavigator, navigationOptions: {
  tabBarIcon: tabInfo => {
    return <Icon size={25} color={tabInfo.tintColor} name="ios-star" /> 
    }
  }
 }
}



  const MealsFavoritesNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
  activeTintColor: Colors.secondaryColor,
  shifting: true,
  barStyle: {
    backgroundColor: Colors.primaryColor
  }
}) : createBottomTabNavigator(tabScreenConfig, {
 }, {
  tabBarOptions: {
      activeTintColor: Colors.secondaryColor
  }
}
)
const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
},
{
    defaultNavigationOptions: defaultStackNavigatorOptions
})

const MainNavigator = createDrawerNavigator({
  MealsFavorites: {screen: MealsFavoritesNavigator, navigationOptions: {
    drawerLabel: 'Meals'
  }},
  Filters: FiltersNavigator
},{
  contentOptions: {
    activeTintColor : Colors.secondaryColor
  }
}
)

export default  createAppContainer(MainNavigator);