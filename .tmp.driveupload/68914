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
import SearchScreen from '../screen/SearchScreen';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabIcon = ({ name, size, color }) => {
    return <Feather name={name} size={size} color={color} />;
};

const RootStack = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="MainScreen"
                backBehavior={'none'}
                screenOptions={{
                    tabBarActiveTintColor: '#FF432A',
                    tabBarShowLabel: false,
                    headerShown: false,
                }}
            >
                <Tab.Screen
                    name="MainStack"
                    component={MainStackScreen}
                    options={{
                        tabBarIcon: (props) => TabIcon({ ...props, name: 'home' }),
                    }}
                />
                <Tab.Screen
                    name="SearchStack"
                    component={SearchStackScreen}
                    options={{
                        tabBarIcon: (props) => TabIcon({ ...props, name: 'search' }),
                    }}
                />
                <Tab.Screen
                    name="RecipeAddStack"
                    component={RecipeAddScreen}
                    options={{
                        tabBarIcon: (props) => TabIcon({ ...props, name: 'plus' }),
                    }}
                />
                <Tab.Screen
                    name="SettingStack"
                    component={SettingStackScreen}
                    options={{
                        tabBarIcon: (props) => TabIcon({ ...props, name: 'menu' }),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default RootStack;

const MainStack = createStackNavigator();
const MainStackScreen = () => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <MainStack.Screen name="MainScreen" component={MainScreen} />
            <MainStack.Screen name="RecipeListScreen" component={RecipeListScreen} />
            <MainStack.Screen name="RecipeBoardScreen" component={RecipeBoardScreen} />
            <MainStack.Screen name="RecipeIngredientsScreen" component={RecipeIngredientsScreen} />
            <MainStack.Screen name="RecipeAddScreen" component={RecipeAddScreen} />
        </MainStack.Navigator>
    );
};

const SearchStack = createStackNavigator();
const SearchStackScreen = () => {
    return (
        <SearchStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
            <SearchStack.Screen name="RecipeBoardScreen" component={RecipeBoardScreen} />
            <SearchStack.Screen name="RecipeIngredientsScreen" component={RecipeIngredientsScreen} />
        </SearchStack.Navigator>
    );
};


const RecipeAddStack = createStackNavigator();
const RecipeAddStackScreen = () => {
    return (
        <RecipeAddStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <RecipeAddStack.Screen name="RecipeAddScreen" component={RecipeAddScreen} />
        </RecipeAddStack.Navigator>
    );
};

const SettingStack = createStackNavigator();
const SettingStackScreen = () => {
    return (
        <SettingStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <SettingStack.Screen name="SettingScreen" component={SettingScreen} />
        </SettingStack.Navigator>
    );
};