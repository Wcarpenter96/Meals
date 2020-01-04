import React from 'react'

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from '../screens/FavoritesScreen';

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
  },
  {
    //   initialRouteName
    mode: 'modal',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white'
      },
      headerTintColor: Colors.primaryColor
    }
  }
);

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {screen: MealsNavigator, navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>;
      }
    }},
    Favorites: {screen: FavoritesScreen, navigationOptions: {
      // use tabBarLabel to override label
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>;
      }
    }}
}, {
  tabBarOptions:{
    activeTintColor: Colors.accentColor
  }
});

export default createAppContainer(MealsFavTabNavigator);
