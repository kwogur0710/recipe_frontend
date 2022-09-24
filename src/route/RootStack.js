import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from '../screen/MainScreen';
import RecipeListScreen from '../screen/RecipeListScreen';
import RecipeIngredientsScreen from '../screen/RecipeIngredientsScreen';
import RecipeBoardScreen from '../screen/RecipeBoardScreen';
import RecipeAddScreen from '../screen/RecipeAddScreen';
import SettingScreen from '../screen/SettingScreen';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabIcon = ({ name, size, color }) => {
    return <Feather name={name} size={size} color={color} />;
};

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main" screenOptions={{ headerMode: false }}>
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="RecipeListScreen" component={RecipeListScreen} />
                <Stack.Screen name="RecipeBoardScreen" component={RecipeBoardScreen} />
                <Stack.Screen name="RecipeIngredientsScreen" component={RecipeIngredientsScreen} />
                <Stack.Screen name="RecipeAddScreen" component={RecipeAddScreen} />
                <Stack.Screen name="SettingScreen" component={SettingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default RootStack;