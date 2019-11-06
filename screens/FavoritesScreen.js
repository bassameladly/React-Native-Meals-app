import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { useSelector } from 'react-redux'
import MealList from '../components/MealList'
import { HeaderButtons } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import  Icon from 'react-native-vector-icons/Ionicons'


const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoritesMeals)
  if( favMeals.length === 0 || !favMeals) {
    return(
      <View style={styles.screen}>
        <Text style={styles.text}>No favorite meals found, start to add some !</Text>
      </View>
    )
  }
    return <MealList listData={favMeals} navigation={props.navigation}/>
}

FavoritesScreen.navigationOptions = navData => {
    return{
      headerTitle: 'Your Favorites',
      headerLeft: ( <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Icon title="Menu" name="ios-menu" onPress={() => {
          navData.navigation.toggleDrawer()
        }} />
      </HeaderButtons>)
    }
   
  };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
      fontWeight: 'bold',
         fontSize: 22,
         textAlign: 'center'
    }
})
export default  FavoritesScreen