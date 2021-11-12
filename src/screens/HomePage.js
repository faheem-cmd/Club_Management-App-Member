import React, { useState } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, StatusBar } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from "react-native-custom-dropdown";

import { Icon } from 'react-native-elements'
const HomePage = ({ navigation }) => {


    const [country, setCountry] = useState('');


    const item = [{ id: 1, name: 'hello' },
    { id: 2, name: 'hello' }, { id: 3, name: 'hello' }, { id: 4, name: 'hello' },
    { id: 5, name: 'hello' }, { id: 5, name: 'hello' }, { id: 6, name: 'hello' },
    ]

    return (

        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="tomato" translucent={true} />
                <View style={styles.subContainer}>
                    <View style={styles.icons}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Icons name={"menu"} color={"tomato"} size={38}>
                            </Icons>
                        </TouchableOpacity>
                        <Icon
                            raised
                            name='user'
                            type='font-awesome'
                            color='tomato' />
                    </View>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 28, color: 'black', fontWeight: 'bold', marginLeft: 5 }}>Hi, Faheem</Text>
                        <View style={styles.subText}>
                            <Text style={{ fontSize: 15, color: 'black', }}>Lorem ipsum doloiojih  iohihihi hihohoiior sit amet, consectetu adipiscing elit ?
                            </Text>
                        </View>
                    </View>
                    <View style={{ padding: '3%' }}>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Explore</Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <View style={styles.main}>
                            <TouchableOpacity style={{ ...styles.card, width: 200 }}>
                                <Text>Ask your member</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.card}>
                                <Text>Ask your member</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card}>
                                <Text>Ask your member</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card}>
                                <Text>Ask your member</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card}>
                                <Text>Ask your member</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card}>
                                <Text>Ask your member</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card}>
                                <Text>Ask your member</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card}>
                                <Text>Ask your member</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default HomePage;


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        paddingVertical: 30
    },
    subContainer: {
        padding: '3%',
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        marginVertical: '3%'
    },
    subText: {
        padding: '2%',
    },
    main: {
        // padding: '3%',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    card: {
        height: 120,
        width: 90,
        backgroundColor: 'yellow',
        borderRadius: 10,
        elevation: 3,
        padding: '2%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    }
})
