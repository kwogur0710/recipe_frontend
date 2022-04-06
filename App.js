import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "./screen/MainScreen";
import RecipeListScreen from "./screen/RecipeListScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="RecipeListScreen" component={RecipeListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}