import React from 'react';
import {FlatList, ImageBackground} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import Icon from 'react-native-vector-icons/Ionicons';

import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Icon
          title="Menu"
          name="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default CategoriesScreen;
