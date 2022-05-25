import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from '../screen/MainScreen';
import RecipeListScreen from '../screen/RecipeListScreen';
import RecipeIngredientsScreen from '../screen/RecipeIngredientsScreen';
import RecipeBoardScreen from '../screen/RecipeboardScreen';
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
                shifting={true}
                activeColor="#f0edf6"
                inactiveColor="#3e2465"
                barStyle={{ backgroundColor: '#694fad' }}
                labeled={true}
                backBehavior={"none"}
            >
                <Tab.Screen
                    name="MainScreen"
                    component={MainScreen}
                    options={{
                        tabBarIcon: (props) => TabIcon({ ...props, name: 'home' }),
                    }}
                />
                <Tab.Screen
                    name="SearchScreen"
                    component={SearchScreen}
                    options={{
                        tabBarIcon: (props) => TabIcon({ ...props, name: 'search' }),
                    }}
                />
                <Tab.Screen
                    name="RecipeAddScreen"
                    component={RecipeAddScreen}
                    options={{
                        tabBarIcon: (props) => TabIcon({ ...props, name: 'plus' }),
                    }}
                />
                <Tab.Screen
                    name="SettingScreen"
                    component={SettingScreen}
                    options={{
                        tabBarIcon: (props) => TabIcon({ ...props, name: 'settings' }),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;
