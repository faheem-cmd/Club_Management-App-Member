import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Icon } from 'react-native-elements'




import HomePageScreen from "../screens/HomePage";
import MembersScreen from "../screens/Members";
import CustomDrawer from "../componants/CustomDrawer";
import LoginScreen from "../screens/Login";
import SignupScreen from "../screens/Signup";
import ContactScreen from "../screens/Contact";








const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();




const MyDrawer = () => {

    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#6fbbd5',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontFamily: 'Roboto-Medium',
                    fontSize: 15,
                },
            }}>
            <Drawer.Screen options={{
                headerShown: false,
                title: 'Home',
                drawerIcon: ({ focused, size }) => (
                    <Icon
                        revised
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={focused ? 'tomato' : '#ccc'}
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
            <Drawer.Screen options={{
                headerShown: false,
                title: 'Members',
                drawerIcon: ({ focused, size }) => (
                    <Icon
                        revised
                        name='users'
                        type='font-awesome'
                        size={20}
                        color={focused ? 'tomato' : '#ccc'}
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
            }} name="Members" component={MembersScreen} />
        </Drawer.Navigator>

    );
}


const Navigation = () => {
    return (

        <Stack.Navigator >
            <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="Home" options={{ headerShown: false }} component={MyDrawer} />
            <Stack.Screen name="Signup" options={{ headerShown: false }} component={SignupScreen} />
            <Stack.Screen name="Members" options={{ headerShown: false }} component={MembersScreen} />
            <Stack.Screen name="CustomDrawer" options={{ headerShown: false }} component={CustomDrawer} />
            <Stack.Screen name="Contact" options={{ headerShown: false }} component={ContactScreen} />




        </Stack.Navigator>
    );
};


export default Navigation