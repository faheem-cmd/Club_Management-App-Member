import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


import HomePageScreen from "./HomePage";
import MembersScreen from "./Members";




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();




const MyDrawer = () => {
    return (
        <Drawer.Navigator
            drawerStyle={{
                backgroundColor: 'blue',
                width: 240,
            }}>
            <Drawer.Screen name="HomePage" component={HomePageScreen} />
            <Drawer.Screen name="Members" component={MembersScreen} />
        </Drawer.Navigator>

    );
}


const Navigation = () => {
    return (

        <Stack.Navigator >
            <Stack.Screen name="Home" options={{ headerShown: false }} component={MyDrawer} />
            <Stack.Screen name="Members" options={{ headerShown: false }} component={MembersScreen} />

        </Stack.Navigator>
    );
};


export default Navigation