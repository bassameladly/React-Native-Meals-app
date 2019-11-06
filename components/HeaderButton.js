import React from 'react'
import { Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import Colors from '../Constants/Colors'
import  Icon from 'react-native-vector-icons/Ionicons'



const CustomHeaderButton = props => {
    return <HeaderButton {...props} 
    color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}>
        <Icon name="ios-star" size={25}/>
    </HeaderButton>
}

export default  CustomHeaderButton