import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

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

export default createAppContainer(MealsNavigator);
