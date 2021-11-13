import React, { useState } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, StatusBar } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from "react-native-custom-dropdown";
import { Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
                            <TouchableOpacity style={{ ...styles.card, width: 200, backgroundColor: '#FFF3C5', }}>
                                <View style={{ flexDirection: 'row', width: '100%', flex: 1, alignItems: 'center', paddingHorizontal: '4%', marginTop: 40, }}>
                                    <Text style={{ fontSize: 16, color: 'black', width: 100, marginBottom: 40,fontWeight: 'bold' }}>Ask your ward member </Text>
                                    <FontAwesome5 name="user-check" size={80} color="#F79844" />

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ ...styles.card, backgroundColor: '#E4E7FF' }}>
                                {/* <Ionicons name="share-social-outline" size={22} /> */}
                                <Icons name="account-box" size={58} color="#3A49BC" />
                                <Text style={{ textAlign: 'center', color: 'black', marginTop: 5, fontWeight: 'bold' }}>Important contacts</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ ...styles.card, backgroundColor: '#FFE5E4' }}>
                                <FontAwesome5 name="tint" size={45} color={'#E84C4C'} />
                                <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', marginTop: 5 }}>Blood Bank</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ ...styles.card, backgroundColor: '#CFFFED' }}>
                                <FontAwesome5 name="university" size={45} color="#2EC48B" />
                                <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', marginTop: 5 }}>Institutions</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ ...styles.card, backgroundColor: '#E2FFC5' }}>
                                <FontAwesome5 name="download" size={45} color="#4BAE4F" />
                                <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', marginTop: 5 }}>Downloads</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ ...styles.card, backgroundColor: '#F3DBFF' }}>
                                <FontAwesome5 name="tshirt" size={45} color="#A244D1" />
                                <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', marginTop: 5 }}>Dress Bank</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ ...styles.card, backgroundColor: '#E2ECFF' }}>
                                <Icons name={"book-open-page-variant"} size={55} color={'#455E90'} />
                                <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', marginTop: 5 }}>Book Bank</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ ...styles.card, backgroundColor: '#D9FBFF' }}>
                                <Icons name={"medical-bag"} size={55} color={'#29B6C9'} />
                                <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', marginTop: 5 }}>Medical</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.news}>
                        <Text style={{color: 'black',fontWeight: 'bold',fontSize:20}}>News Feed</Text>
                        <Text style={{color: 'tomato',fontWeight: 'bold',fontSize:20}}>See All</Text>
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
        justifyContent: 'center'
    },
    card: {
        height: 120,
        width: 92,
        backgroundColor: 'yellow',
        borderRadius: 15,
        elevation: 6,
        // padding: '4%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '3%',
    },
    news: {
        padding: '3%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})
