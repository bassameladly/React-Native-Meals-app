import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import RootNavigator from './screens/MealsNavigation'
import { useScreens } from 'react-native-screens'
import { createStore, combineReducers } from 'redux'
import mealsReducer from './store/reducers/meals'
import { Provider } from 'react-redux'

useScreens()

const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer)
 
export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <RootNavigator />
        </Provider>
    )
  }

  }
 

 