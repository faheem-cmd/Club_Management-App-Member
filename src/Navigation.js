import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


import HomePageScreen from "./HomePage";



const Stack = createStackNavigator();




const Navigation = () => {
    return (

        <Stack.Navigator >
            <Stack.Screen name="HomePage" options={{ headerShown: false }} component={HomePageScreen} />
        </Stack.Navigator>
    );
};


export default Navigation