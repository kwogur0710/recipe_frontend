import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MainScreen from '../screen/MainScreen';
import TestScreen from '../screen/TestScreen';
import RecipeListScreen from '../screen/RecipeListScreen';
import { RootStack } from './RootStack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="StackNavigator"
                component={StackNavigator}
            />
            <Drawer.Screen
                name="TestScreen"
                component={TestScreen}
            />
            {/* <RootStack /> */}
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
