import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {colors, width, height} from './config/globalStyles'; //width,height 받아오기
import MainScreen from "./screen/MainScreen";
import RecipeListScreen from "./screen/RecipeListScreen";
import RecipeIngredients from "./screen/RecipeIngredients";
import TestScreen from "./screen/TestScreen";
import MultiSelect from "./screen/MultiSelect";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerMode: false}}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="TestScreen" component={TestScreen} />
        <Stack.Screen name="RecipeListScreen" component={RecipeListScreen} />
        <Stack.Screen name="RecipeIngredients" component={RecipeIngredients} />
        <Stack.Screen name="MultiSelect" component={MultiSelect} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}