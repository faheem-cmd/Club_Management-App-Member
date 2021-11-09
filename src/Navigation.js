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
        <Drawer.Navigator>
            <Drawer.Screen options={{
                title: 'Yuva arts & Sports Club',
                drawerIcon: ({ focused, size }) => (
                    <Icon
                        name="account-tie"
                        size={20}
                        color={focused ? '#7cc' : '#ccc'}
                    />
                ),
                gestureEnabled: true,
                headerStyle: {
                    backgroundColor: '#000080',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} name="HomePage" component={HomePageScreen} />
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