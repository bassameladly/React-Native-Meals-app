import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const CategoryMealsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Hello CategoryMealsScreen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default  CategoryMealsScreen