import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Icon } from 'react-native-elements'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { set } from 'react-native-reanimated';



const Contact = () => {


    const item = [{ id: 1, name: 'All' },
    { id: 2, name: 'Emergency Call' },
    { id: 3, name: 'Health' },
    { id: 4, name: 'gym' }, { id: 5, name: 'ground' },
    ]

    const [select, setSelect] = useState(1)
    const [all, setAll] = useState(true)
    const [emr, setEmr] = useState(false)
    const [health, setHealth] = useState(false)
    const [gym, setGym] = useState(false)
    const [search, setSearch] = useState('')


    const list = [{ id: 1, name: 'mazin' }, { id: 2, name: 'abu' }, { id: 3, name: 'ram' }]
    const faheem = [{ id: 1, name: 'kazin' }, { id: 2, name: 'mabu' }, { id: 3, name: 'sam' }]






    const handle = (e) => {
        setSelect(e)

        switch (e) {
            case 1:
                setAll(true)
                setEmr(false)
                setHealth(false)
                setGym(false)
                break;
            case 2:
                setEmr(true)
                setAll(false)
                setHealth(false)
                setGym(false)
                break;
            case 3:
                setHealth(true)
                setAll(false)
                setEmr(false)
                setGym(false)
                break;
            case 4:
                setGym(true)
                setHealth(false)
                setAll(false)
                setEmr(false)

                break;

            default:
                console.log('hello')

        }

    }

    const filterList = (list) => {
        return list.filter(listItem => listItem.name.toLowerCase().includes(search.toLowerCase()));
    }


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.subContainer}>
                    <View style={styles.back}>
                        <TouchableOpacity style={{ width: 40 }}>
                            <FontAwesome5 name="arrow-left" size={22} color="tomato" />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 40 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, }}>Important Contacts</Text>
                        </View>
                    </View>
                    <View style={styles.searchContainer}>
                        <View style={styles.search}>
                            <TextInput placeholder='Search Names...' style={{ padding: 0, width: 250, height: 20, marginRight: 10, }}
                                onChangeText={(e) => setSearch(e)}>
                            </TextInput>
                            <Icons name={"magnify"} size={22} color={'grey'} style={{ marginRight: 20 }} />
                        </View>
                    </View>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.filter}>
                        {item.map(item =>
                            <TouchableOpacity style={select === item.id ? styles.text : { ...styles.text, backgroundColor: 'white' }} key={item.id}
                                onPress={() => handle(item.id)}>
                                <Text style={select === item.id ? styles.font : { ...styles.font, color: 'black' }}>{item.name}</Text>
                            </TouchableOpacity>)}
                    </View>
                </ScrollView>
                {all && <View>
                    {filterList(list).map((list, index) =>
                        <View key={list.id}>
                            <Text key={index}>{list.name}</Text>
                        </View>)}
                </View>}
                {emr && <View>
                    {filterList(faheem).map((lis, index) =>
                        <View>
                            <Text key={index}>{lis.name}</Text>
                        </View>)}
                </View>}
                {health && <Text>health</Text>}
                {gym && <Text>gym</Text>}

            </ScrollView >
        </View >
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f1f5f9',
        paddingVertical: 30

    },
    subContainer: {
        padding: '5%',
    },
    back: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchContainer: {
        marginTop: 20,
        padding: '2%',
    },
    search: {
        padding: 12,
        backgroundColor: '#Fff',
        borderRadius: 30,
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    filter: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        marginVertical: 10,
        paddingLeft: 15,
    },
    text: {
        backgroundColor: 'tomato',
        alignSelf: 'flex-start',
        padding: 12,
        borderRadius: 10,
        elevation: 4,
        marginRight: 10
    },
    font: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }

})