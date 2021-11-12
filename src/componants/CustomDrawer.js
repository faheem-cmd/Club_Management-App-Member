import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, Share, Button, StatusBar } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = props => {

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: 'tomato' }}>
                <ImageBackground
                    source={require('../assets/pic.jpg')}
                    style={{ height: 200,}}>
                    <View style={{
                        backgroundColor: 'rgba(52, 52, 52, 0.6)',
                        height: 200,padding:20
                    }}>
                        <View style={{ alignItems: 'flex-end' }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    color: 'orange',
                                    fontSize: 12,
                                    fontFamily: 'Roboto-Medium',
                                    fontWeight: 'bold',
                                }}> Edit Profile</Text>
                                <Ionicons name="pencil" color={'orange'} size={12} style={{ paddingLeft: 4 }} />
                            </TouchableOpacity>
                        </View>

                        <Image
                            source={{ uri: 'https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg' }}
                            style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
                        />

                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 18,
                                fontFamily: 'Roboto-Medium',
                                marginBottom: 5,
                                fontWeight: 'bold'
                            }}>
                            John Doe
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={{
                                    color: 'orange',
                                    fontFamily: 'Roboto-Regular',
                                    marginRight: 5,
                                }}>
                                Secretery
                            </Text>
                            <FontAwesome5 name="coins" size={14} color="orange" />
                        </View>
                    </View>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => onShare()} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="share-social-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 5,
                            }}>
                            Tell a Friend
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 5,
                            }}>
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;