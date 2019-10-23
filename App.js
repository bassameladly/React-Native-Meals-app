import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import RootNavigator from './screens/MealsNavigation'
import CategoriesScreen from './screens/CategoriesScreen'
import CategoryMealsScreen from './screens/CategoryMealsScreen'
import MealDetailScreen from './screens/MealDetailScreen'

export default class App extends React.Component {
  render() {
    return(
      <View style={styles.screen}>
        <RootNavigator />
      

        </View>
      
    )
  }

  }
 
const styles = StyleSheet.create({
  screen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
})
 