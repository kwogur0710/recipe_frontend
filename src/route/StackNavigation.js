import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screen/MainScreen';
import RecipeListScreen from '../screen/RecipeListScreen';
import RecipeIngredientsScreen from '../screen/RecipeIngredientsScreen';
import RecipeBoardScreen from '../screen/RecipeboardScreen';
import RecipeAddScreen from '../screen/RecipeAddScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerMode: true }}>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="RecipeListScreen" component={RecipeListScreen} />
            <Stack.Screen name="RecipeIngredientsScreen" component={RecipeIngredientsScreen} />
            <Stack.Screen name="RecipeBoardScreen" component={RecipeBoardScreen} />
            <Stack.Screen name="RecipeAddScreen" component={RecipeAddScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
