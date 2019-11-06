import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'

const MealItem = props => {
return(
    <View style={styles.mealItem}>
    <TouchableOpacity onPress={props.onSelectMeal}>
    <View>
        <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
        <Text style={styles.title}>{props.title}</Text>
        </ImageBackground>
        </View>
        <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <Text>Duration is {props.duration} Min</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
        </View>
    </View>
    </TouchableOpacity>
    </View>
)
}
const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row',

    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        marginVertical: 10
    },
    mealHeader: {
        height: '85%',
    },
    mealDetail: {
        paddingHorizontal: 10 ,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 22,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center'
    },
    textStyle: {
        fontSize: 25
    }
})

export default MealItem