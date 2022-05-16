import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigation';

import MainScreen from '../screen/MainScreen';
import RecipeListScreen from '../screen/RecipeListScreen';
import RecipeIngredientsScreen from '../screen/RecipeIngredientsScreen';
import RecipeBoardScreen from '../screen/RecipeboardScreen';
import RecipeAddScreen from '../screen/RecipeAddScreen';
import TestScreen from '../screen/TestScreen';

const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main" screenOptions={{ headerMode: false }}>
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="RecipeListScreen" component={RecipeListScreen} />
                <Stack.Screen name="RecipeIngredientsScreen" component={RecipeIngredientsScreen} />
                <Stack.Screen name="RecipeBoardScreen" component={RecipeBoardScreen} />
                <Stack.Screen name="RecipeAddScreen" component={RecipeAddScreen} />
                <Stack.Screen name="TestScreen" component={TestScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;
