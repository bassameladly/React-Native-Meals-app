import React, {useState, useCallback, useEffect} from 'react'
import {View, Text, StyleSheet, Switch} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import Colors from '../Constants/Colors'
import { useDispatch} from 'react-redux'
import { setFilters } from '../store/actions/meals'

  const  FilterSwitch = props => {
    return(
            <View style={styles.filtersContainer}>
              <Text style={styles.switch}>{props.label}</Text>
                <Switch 
                trackColor={{true: Colors.primaryColor}}
                thumbColor={Colors.primaryColor}
                value={props.state}  
                onValueChange={props.onChange}/>  
            </View>
    )
  }

const FiltersScreen = props => {
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)

  const dispatch = useDispatch()

const SaveFilters = useCallback(() => {
  const appliedFilters = {
    glutenFree: isGlutenFree,
    vegan: isVegan,
    lactoseFree: isLactoseFree,
    vegetarian: isVegetarian
  }
  dispatch(setFilters(appliedFilters))
}, [isGlutenFree, isVegan ,isLactoseFree, isVegetarian, dispatch])

useEffect(() => {
  props.navigation.setParams({
    save: SaveFilters})
},[SaveFilters])

    return(
        <View style={styles.screen}>
            <Text style={styles.title}> Available Filters</Text>
            <FilterSwitch 
            label='Gluten-Free' 
            state={isGlutenFree} 
            onChange={newValue => setIsGlutenFree(newValue)}/>
            <FilterSwitch 
            label='Vegan' 
            state={isVegan} 
            onChange={newValue => setIsVegan(newValue)}/>
            <FilterSwitch 
            label='Lactose-Free' 
            state={isLactoseFree} 
            onChange={newValue => setIsLactoseFree(newValue)}/>
            <FilterSwitch 
            label='Vegetarian' 
            state={isVegetarian} 
            onChange={newValue => setIsVegetarian(newValue)}/>
            
        </View>
    )
}

FiltersScreen.navigationOptions = navData => {
    return{
      headerTitle: 'Filters meals',
      headerLeft: ( 
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Menu" name="ios-menu" onPress={() => {
          navData.navigation.toggleDrawer()
        }} />
      </HeaderButtons>
      ),  
      headerRight: (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Save" name="ios-save" onPress={() => {
          navData.navigation.getParam('save')
        }} />
      </HeaderButtons>
      )
    }  
  };
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 22,
      margin: 20,
      textAlign: 'center'
    },
    filtersContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%'
    },
    switch: {
      fontWeight: 'bold',
      fontSize: 15,
      margin: 12
    }
})
export default  FiltersScreen